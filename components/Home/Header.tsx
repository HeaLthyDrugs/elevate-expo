import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.username}>Manish</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
       },
      greeting: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: Colors.fontDark,
        },
      username: {
        fontSize: 40,
        color: Colors.fontDark,
        fontFamily: 'Montserrat-Bold',
       }
})

export default Header