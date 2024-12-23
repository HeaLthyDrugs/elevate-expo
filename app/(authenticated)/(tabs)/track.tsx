import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'

const track = () => {
    const top = useSafeAreaInsets().top
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundLight, }}>
            <Text>track</Text>
        </SafeAreaView>
    )
}

export default track