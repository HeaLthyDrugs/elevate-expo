import { Colors } from '@/constants/Colors';
import { useAuth } from '@clerk/clerk-expo';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Page = () => {
  const { signOut } = useAuth();
  const top = useSafeAreaInsets().top
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundLight, paddingTop: top, }}>
        <Text>account</Text>
        <Button title="Sign Out" onPress={() => signOut()} />
    </SafeAreaView>
)
}
export default Page;