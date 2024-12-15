import { Colors } from "@/constants/Colors";
import { ModalType } from "@/types/enums";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
    const {top} = useSafeAreaInsets();

    const openLink = () => {}

    const showModal = async (type: ModalType) => {

    }

    return (
        <View style={[styles.container, {paddingTop: top}, ]}>
            <TouchableOpacity style={styles.button} onPress={() => showModal(ModalType.Login)}>
                <Text>Log In nigger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => showModal(ModalType.SignUp)}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.fontLight,
        padding: 16,
        borderRadius: 8,
        margin: 10,
       justifyContent: 'center',
        alignItems: 'center',
    }
})