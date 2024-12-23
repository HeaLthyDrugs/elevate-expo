import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import Header from '@/components/Home/Header'

const home = () => {
    const top = useSafeAreaInsets().top
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundLight, }}>
            <Header />
           </SafeAreaView>
    )
}

export default home