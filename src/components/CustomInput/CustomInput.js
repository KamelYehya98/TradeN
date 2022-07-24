import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput 
        value = {value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={style.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
};

const style = StyleSheet.create({
  container:{
    width: '100%',
    paddingHorizontal: 25,
    flexDirection: 'row-reverse'
  },
  input: {
    width: '100%',
    backgroundColor: 'none',
    borderBottomColor: "#e8e8eB",
    borderBottomWidth: 1,
    textAlign: 'left',
    marginVertical: 15,
  }
});

export default CustomInput;