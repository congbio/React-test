import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import BottomBar from '../components/bottomBar';

export default function Link() {
  return (
    <View style={styles.container}>
      <Text>LInk</Text>
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
