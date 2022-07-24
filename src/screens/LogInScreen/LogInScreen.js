import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const LogInScreen = () => {

    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    return (
        <View style={styles.root}>
          <Text style={styles.login}>Login</Text>
          <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
          <CustomInput placeholder="Password" secureTextEntry={true} value={password} setValue={setPassword}/>
          <CustomButton onPress={null} text="LOGIN"/>
          <Text style={styles.dontHaveAnAccount}>Don't have an account? signup
          </Text>
        </View>
      )
}

const styles = StyleSheet.create({
    root:{
      alignItems: 'center',
      padding: 20
    },
    login:{
      alignItems: 'center',
      fontSize: 40,
      marginVertical: 50,
      color: '#00D369',
      fontFamily: 'sans-serif-condensed'
    }
})

export default LogInScreen