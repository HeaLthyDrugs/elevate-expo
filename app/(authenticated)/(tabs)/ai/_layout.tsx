import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';

const Layout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: 'white'
        }}
      />
 
    </Stack>
  );
};
export default Layout;