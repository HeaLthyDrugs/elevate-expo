import { Colors } from "@/constants/Colors"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#60A5FA',
                tabBarInactiveTintColor: '#CBD5E1',
                tabBarShowLabel: false,
                headerStyle: {
                    backgroundColor: Colors.backgroundLight,
                },
                headerTitleStyle: {
                    color: Colors.fontDark,
                },
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.backgroundLight,
                    borderTopWidth: 0,
                },
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="track"
                options={{
                    title: 'Track',
                    tabBarIcon: ({ size, color }) => (
                        <Entypo
                            name="circular-graph"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="blogs"
                options={{
                    title: 'Blogs',
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign
                            name="filetext1"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign
                            name="user"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
export default Layout;