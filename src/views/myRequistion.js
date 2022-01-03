import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import BottomBar from '../components/bottomBar';

export default function MyRequistion() {
  return (
    <View style={styles.container}>
      <Text>My Requistion</Text>
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
