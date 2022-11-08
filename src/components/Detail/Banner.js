import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/image133png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 361,
    height: 203,
    left: 8,
    top: 10,
  },
  item: {
    width: 361,
    height: 180,
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginLeft: 120,
  },
});
export default Banner;