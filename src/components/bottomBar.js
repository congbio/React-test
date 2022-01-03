import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

export default function BottomBar() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <StatusBar  style="dark" />
      <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
        <View style={styles.itemBottomBar}>
          <Feather name="home" size={24} color="black" />
          <Text>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('MyRecord')} >
        <View style={styles.itemBottomBar}>
        <FontAwesome5 
          name="list-alt" 
          size={24} 
          color="black" 

        />
          <Text>My Records</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SiteEvent')}>
        <View style={styles.itemBottomBar}>
          <MaterialIcons name="event-available" size={24} color="black" />
          <Text>Site Event</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Link')}>
        <View style={styles.itemBottomBar}>
          <AntDesign name="link" size={24} color="black" />
          <Text>Link</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ContactUS')}>
        <View style={styles.itemBottomBar}>
          <Feather name="phone" size={24} color="black" />
          <Text>Contact</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  itemBottomBar: {
    padding: 15,
    alignItems: "center",
  },
});


