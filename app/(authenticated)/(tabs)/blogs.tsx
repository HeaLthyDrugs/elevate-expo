import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Home/Header'
import { Colors } from '@/constants/Colors'

const blogs = () => {
  const top = useSafeAreaInsets().top
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundLight, }}>
          <Text>blogs</Text>
      </SafeAreaView>
  )
}

export default blogs