import { Colors } from "@/constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTitleStyle: {
                    color: 'white',
                },
            }}>
            <Tabs.Screen
                name="blogs"
                options={{
                    title: 'Blogs',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="view-dashboard-variant-outline"
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
                        <MaterialCommunityIcons
                            name="view-dashboard-variant-outline"
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