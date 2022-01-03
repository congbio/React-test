import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import BottomBar from '../components/bottomBar';
// import HomeSlide from '../components/homeSlider';

export default function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Text style={{ color: 'red' }}>{route?.params?.email}</Text>
        <Text>{route?.params?.password}</Text>
      <View>
          {/* <HomeSlide/> */}
      </View>
      <StatusBar style="auto" />
      <BottomBar></BottomBar>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
  });
