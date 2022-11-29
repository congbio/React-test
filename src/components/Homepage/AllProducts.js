import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
 
import React, { useState,useEffect } from 'react';
import axios from 'axios';
 
import { TouchableOpacity } from 'react-native-gesture-handler';
 

const api = 'https://6290540a27f4ba1c65b73fb1.mockapi.io/ReactNative';

 
 
 

const AllProducts = ({navigation}) => {
  const [dataLocation,setDataLocation]=useState([])

    const getapi =()=>{
        
        axios.get(api).then((response) => {
            setDataLocation(response.data);
          
        });
       
    }
    useEffect(() => { getapi() }, []);

  
  const windowWidth = Dimensions.get('window').width;
  const renderItem = ({item}) => (
    <TouchableOpacity     style={[
        styles.item,
        {
          width: (windowWidth - 56) / 2,
        },
      ]}   
    onPress={ ()=>{
      navigation.navigate('DetailProduct',{motobike:item})
  } } 
  key={item.id} style={styles.item}
    >
      <Image style={styles.picture} source={{uri: `${item.img}`}} />
      <View style={styles.packet}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>

        <View style={styles.buttonStyle}>
          <Button title={'Đặt'}></Button>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={dataLocation}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    height: 160,
    marginBottom: 40,
   
  },
  picture: {
    width: 180,
    height: 130,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  desc: {
    fontSize: 10,
  },
  title: {
    fontSize: 12,
  },
  price: {
    fontSize: 8,
    color: 'red',
  },
  buttonStyle: {
    height: 40,
    width: 70,
    fontSize: 10,
    margin: 10,
   
    
  },
  packet:{
    flexDirection: "row",
    flex: 1
  }
});
export default AllProducts;
