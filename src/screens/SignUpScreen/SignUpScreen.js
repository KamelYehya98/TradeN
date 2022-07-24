import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignUpScreen = () => {

  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const {phoneNumber, setPhoneNumber} = useState('');

  return (
      <View style={styles.root}>
        <Text style={styles.signUp}>Sign Up</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" secureTextEntry={true} value={password} setValue={setPassword}/>
        <CustomInput placeholder="+963 93 843 3297" value={phoneNumber} setValue={setPhoneNumber}/>
        <CustomButton onPress={null} text="SIGN UP"/>
        <Pressable onPress={null}>
          <Text style={styles.haveAnAccount}>
            Already have an account? login
          </Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
    root:{
      alignItems: 'center',
      padding: 20
    },
    signUp:{
      alignItems: 'center',
      fontSize: 40,
      marginVertical: 50,
      color: '#00D369',
      fontFamily: 'sans-serif'
    },
    haveAnAccount:{
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif'
    }
})
export default SignUpScreen