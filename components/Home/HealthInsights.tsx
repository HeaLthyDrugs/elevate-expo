import { View, Text } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

export const HealthInsight = () => {
  return (
    <View style={{ 
      backgroundColor: 'rgba(255,255,255,0.9)', 
      borderRadius: 12,
      padding: 16,
      margin: 16,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      {/* <IconBulb size={24} /> */}
      <Text style={{ 
        marginLeft: 12,
        fontSize: 16,
        color: Colors.fontDark,
        flex: 1,
      }}>
        Your sleep score improved by 10% last night. Keep it up!
      </Text>
    </View>
  );
};