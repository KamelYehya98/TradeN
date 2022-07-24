import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={style.button}>
      <Text style={style.text}>{text}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
    button:{
        backgroundColor: '#00D369',
        padding: 12,
        borderRadius: 4,
        marginVertical: 20
    },
    text:{
        color: 'white'
    }
});
export default CustomButton