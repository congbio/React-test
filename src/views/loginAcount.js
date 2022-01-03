import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  Pressable,
  TextInput,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logoapp.jpg'

export default function LoginAcount({navigation}) {

    const [getEmail,setEmail]= useState('');
    const [getPass,setPass]= useState('');
    // const navigation = useNavigation(); 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <SafeAreaView>
          <Image style={styles.image} source={logo} />
        </SafeAreaView>

      </View>

      <View style={styles.viewtextintro}>
        <Text style={styles.textintro}>Acciona Account Users(eg.@accna,</Text>
        <Text style={styles.textintro}>@colemanrail etc.) Sign in with your corporate ID</Text>
      </View>

      <View style={styles.viewredbutton}>
        <Pressable style={styles.redbutton} onPress={() => Alert.alert('Coming soon')}>
          <Text style={styles.textredbutton}>AccionaCorporateLogin</Text>
        </Pressable>
      </View>

      <View>
        <Text style={styles.textor}>────────────── OR ───────────────</Text>
      </View>

      <View>
        <Text style={styles.otheruser}>And Other Users/User the login form below</Text>
      </View>
      
      <View style={styles.viewinput}>
        <Text style={styles.titleinput}>Email</Text>
            <TextInput
            style={styles.textinput}
            keyboardType='email-address'
            placeholder="   Name@host.com"
            onChangeText={setEmail}
          />
        <Text style={styles.titleinput}>Password</Text>
        <TextInput
            style={styles.textinput}
            placeholder="   Password"
            onChangeText={setPass}
             secureTextEntry={true}
           
          />  
      </View>

      <View>
        <Text style={styles.forgotpassword}>Forgot your password ?</Text>
      </View>    

      <View style={styles.viewredbutton}>
        <Pressable style={styles.blackbutton}  
            onPress={() => navigation.navigate('MyProfile',{
              email: getEmail,
              password: getPass,
            })}>
          <Text style={styles.textredbutton}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.viewcontact}>
      <Text style={styles.contact}>Forgot your password or having trouble signing in ?</Text>
      <Text style={styles.contact}>Contact the Service Desk on:<Text style={styles.contactred}>(03) 9624 4236</Text></Text>
      <Text style={styles.contact}>Raise an incident via <Text style={styles.contactred}>Service Now Portal</Text></Text>
    
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginLeft: '8%',
    marginRight: '8%'

  },

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flexDirection: 'row',
    width: 110,
    height: 110,
    marginTop: 50
  },

  viewtextintro: {
    marginTop: '10%',

  },

  textintro: {
    color: '#7a7a85',
    fontWeight: 'bold',
    fontSize: 14
  },

  viewredbutton: {
    marginTop: '5%',
  },

  redbutton: {
    borderRadius: 7,
    height: 50,
    backgroundColor: '#e00000',
  },

  textredbutton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%',
  },

  textor:{
    color: '#7a7a85',
    marginTop: '5%',
  },

  otheruser:{
    marginTop:'10%',
    color:"#595967",
    marginBottom:'5%',
  },

  titleinput:{
    fontWeight:'bold',
    color:'#595967',
    fontSize:14
  },

  textinput:{
    height:40,
    borderWidth: 1,
    borderRadius: 7,
    borderColor:'#595967',
    marginTop:'2%'
  },

  forgotpassword:{
    marginTop:'5%',
    marginLeft:'50%',
    color:'#595967'
  },

  blackbutton: {
    borderRadius: 7,
    height: 50,
    backgroundColor: '#141434',
    marginBottom:'5%'
  },
  viewcontact:{
    justifyContent:'center'
  },
  contact:{
    textAlign: 'center',
    color:'#595967',
    marginTop:'2%'
  },
  contactred:{
    color:'red',
    fontWeight:'bold'
  }


});