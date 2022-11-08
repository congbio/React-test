import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { PRODUCT_DATA } from '../../data/productData';

const TopProducts = ({navigation}) => {
  console.log(":",navigation);
   
 
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {PRODUCT_DATA.map((ele, index) => {
        return (
          <TouchableOpacity onPress={ ()=>{
              navigation.navigate('DetailProduct',{user:ele})
          } } 
          key={index} style={styles.item}>
            <Image style={styles.picture} source={ele.img} />
            <Text style={styles.title}>{ele.title}</Text>
            <Text style={styles.desc}>{ele.desc}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    top: 10,
  },
  item: {
    width: 200,
    height: 150,
    marginLeft: 15,
  },
  title: {
    fontSize: 12,
    // backgroundColor: "#DCDCDC",
    marginTop: 5,
  },
  picture: {
    width: 180,
    height: 120,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: '#F5F7FA',
  },
});
export default TopProducts;
