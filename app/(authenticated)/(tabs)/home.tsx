import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import Header from '@/components/Home/Header'
import { HealthInsight } from '@/components/Home/HealthInsights'

const home = () => {
    const top = useSafeAreaInsets().top
    
    const getTimeBasedColor = () => {
        const hour = new Date().getHours();
        if (hour < 12) return '#E0F2FE'; // Morning blue
        if (hour < 17) return '#FEF3C7'; // Afternoon warm
        if (hour < 20) return '#FFE4E6'; // Evening orange
        return '#E0E7FF'; // Night purple
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: getTimeBasedColor()  }}>
            <View style={{ 
                flex: 1, 
            }}>
                <Header />
                <HealthInsight />
            </View>
        </SafeAreaView>
    )
}

export default home