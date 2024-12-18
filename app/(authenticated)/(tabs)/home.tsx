import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const home = () => {
    return (
        <View>
            <Text>home</Text>
            <TouchableOpacity>
                <Text>Click me to go to settings</Text>
            </TouchableOpacity>
        </View>
    )
}

export default home