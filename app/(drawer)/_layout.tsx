import Drawer from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const DrawerRoot = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen name="index" options={{
                    drawerLabel: 'Home',
                    title: 'overview',
                }} />
                <Drawer.Screen name="user" options={{
                    drawerLabel: 'User',
                    title: 'User',
                }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default DrawerRoot