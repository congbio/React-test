import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Searchbar from './SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Banner() {
  const [value, setValue] = useState();
  function updateSearch(value) {
    console.log(value);
  }
  return (
    <View style={styles.container}>
      <View
        style={{height: '100%', backgroundColor: '#3F569C', borderRadius: 10}}>
        {/* <Image
          style={{marginTop: '15%', marginLeft: '5%'}}
          source={require('../../../assets/img/img2.jpg')}
        /> */}
        <Text style={styles.title}>Travel Look</Text>
        <Searchbar
          value={value}
          updateSearch={updateSearch}
          style={{marginTop: '15%'}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 20,
    color : 'white',
    textAlign: 'center',
    top: '15%',
  }
});
