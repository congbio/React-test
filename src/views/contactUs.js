import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import BottomBar from '../components/bottomBar';
import PostFormContainer from './containers/PostFormContainer';
import AllPostContainer from '../containers/AllPostContainer';

export default function ContactUs() {
  return (
    <View style={styles.container}>
 
        {/* <PostFormContainer />
        <AllPostContainer /> */}
        <BottomBar></BottomBar>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
  });
