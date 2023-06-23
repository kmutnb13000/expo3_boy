import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn2({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: '60%',
        paddingVertical: 5,
        marginVertical: 10,marginTop: 10
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold' }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
