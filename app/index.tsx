import { Colors } from "@/constants/Colors";
import { ModalType } from "@/types/enums";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function Index() {
    const { top } = useSafeAreaInsets();
    const { showActionSheetWithOptions } = useActionSheet();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['33%'], []);

    const [authType, setAuthType] = useState<ModalType | null>(null);

    const openLink = () => { }

    const showModal = async (type: ModalType) => {
        // console.log('Showing modal, ref current:', bottomSheetModalRef.current);
        setAuthType(type);
        if (bottomSheetModalRef.current) {
            bottomSheetModalRef.current.present();
        } else {
            // console.error('Bottom sheet ref is not available');
        }
    };
    const openActionSheet = async () => {
        const options = ['View support docs', 'Contact us', 'Cancel'];
        const cancelButtonIndex = 2;

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                title: `Can't log in or sign up?`,
            },
            (selectedIndex: any) => {
                switch (selectedIndex) {
                    case 1:
                        // Support
                        break;

                    case cancelButtonIndex:
                    // Canceled
                }
            }
        );
    };

    const renderBackdrop = useCallback(
        (props: any) => {
            // console.log("Backdrop clicked");
            return (
                <BottomSheetBackdrop
                    opacity={0.3}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    {...props}
                    onPress={() => bottomSheetModalRef.current?.close()}
                />
            );
        },
        []
    );


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <View style={[styles.container, { paddingTop: top },]}>
                    <TouchableOpacity style={styles.button} onPress={() => showModal(ModalType.Login)} >
                        <Text>Log In ni</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => showModal(ModalType.SignUp)}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={openActionSheet}>
                        <Text>Contact Up</Text>
                    </TouchableOpacity>
                </View>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    handleComponent={null}
                    backdropComponent={renderBackdrop}
                    enableOverDrag={false}
                    enablePanDownToClose>
                    {/* <BottomSheetView style={styles.contentContainer}> */}
                        <AuthModal authType={authType} />
                    {/* </BottomSheetView> */}
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.fontLight,
        padding: 16,
        borderRadius: 8,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

})