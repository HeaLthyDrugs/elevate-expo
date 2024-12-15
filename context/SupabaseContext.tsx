import { createContext, useContext, useEffect } from 'react';
import { client } from '@/utils/supabaseClient';
import { useAuth } from '@clerk/clerk-expo';
// import { decode } from 'base64-arraybuffer';
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';

export const USERS_TABLE = 'users';
// export const FILES_BUCKET = 'files';

type ProviderProps = {
  userId: string | null;
  findUsers: (search: string) => Promise<any>;
  getRealtimeCardSubscription: (
    id: string,
    handleRealtimeChanges: (update: RealtimePostgresChangesPayload<any>) => void
  ) => any;
  uploadFile: (
    filePath: string,
    base64: string,
    contentType: string
  ) => Promise<string | undefined>;
  getFileFromPath: (path: string) => Promise<string | undefined>;
  setUserPushToken: (token: string) => Promise<any>;
};

const SupabaseContext = createContext<Partial<ProviderProps>>({});

export function useSupabase() {
  return useContext(SupabaseContext);
}

export const SupabaseProvider = ({ children }: any) => {
  const { userId } = useAuth();

  useEffect(() => {
    setRealtimeAuth();
  }, []);

  const setRealtimeAuth = async () => {
    const clerkToken = await window.clerk.session?.getToken({
      template: 'supabase',
    });

    client.realtime.setAuth(clerkToken!);
  };

  const findUsers = async (search: string) => {
    // Use the search_users stored procedure to find users by email
    const { data } = await client.rpc('search_users', { search: search });
    return data;
  };

  const setUserPushToken = async (token: string) => {
    const { data, error } = await client
      .from(USERS_TABLE)
      .upsert({ id: userId, push_token: token });

    if (error) {
      console.error('Error setting push token:', error);
    }

    return data;
  };

  const value = {
    userId,
    findUsers,
    setUserPushToken,
  };

  return <SupabaseContext.Provider value={value}>{children}</SupabaseContext.Provider>;
}