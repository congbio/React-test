import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import BottomBar from '../components/bottomBar';


export default function EmployeeBenefits() {
  return (
    <View style={styles.container}>
      <Text>EmployeeBenefits</Text>
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
