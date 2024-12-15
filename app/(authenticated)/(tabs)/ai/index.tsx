// app/(authenticated)/(tabs)/ai/index.tsx
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Page = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AI Page</Text>
      <TouchableOpacity 
        onPress={() => router.push('/(authenticated)/(tabs)/ai/settings')} // Use relative path
        style={{
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          marginTop: 20
        }}
      >
        <Text style={{ color: 'white' }}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Page