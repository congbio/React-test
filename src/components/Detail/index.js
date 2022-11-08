import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
 
import {useEffect} from 'react';
// import TabViewMenu from './TabView';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DetailProduct = ({route, navigator}) => {
  const user = route.params.user;
   
  const navigation = useNavigation(); 
  return (
    <ScrollView style={styles.container}>
      <Text style={{fontWeight: '900', fontSize: 22, color: '#090F47'}}>
        Chi tiết xe{' '}
      </Text>
      <Text style={styles.captionTitle}> {user.title}</Text>
      <View style={styles.logo}>
        <Image style={styles.slideImage} source={user.img} />
      </View>
      <View style={styles.introDetail}>
        <View>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 20,
              color: '#090F47',
              textAlign: 'center',
              marginTop: 5,
            }}>
            Honda SH 2022
          </Text>
          <Text style={styles.addTitle}>
            Xe máy thông minh - Số tự động - Xăng - Giao xe tận nơi{' '}
          </Text>
        </View>
        <TouchableOpacity onPress={ ()=>{
              navigation.navigate('map',{user:user})
          } } > 
          <Text>xem địa chỉ</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.productPackage}>
        <Text style={styles.titlePackage}>Phương thức liên hệ</Text>
        <View style={styles.pricingModel}>
          <View style={styles.priceIndi}>
            <Text style={styles.titleA}>Nhắn tin</Text>
          </View>
          <View style={styles.priceAva}>
            <Text style={styles.title}>Gọi điện miễn phí</Text>
          </View>
          <View style={styles.priceAva}>
            <Text style={styles.title}>Gọi điện qua số</Text>
          </View>
        </View>
      </View>
      <View>
        {/* <TabViewMenu/> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
   
    marginHorizontal: 15,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '300',
  },
  captionTitle: {
    color: '#090F47',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  slideImage: {
    width: 200,
    height: 200,
  },

  introDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTitle: {
    color: '#090F47',
  },
  productPackage: {
    marginTop: 30,
  },
  pricingModel: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 30,
  },
  // title: {
  //   fontSize: '12px',
  //   color: '#3399FF',
  // },
  titleA: {
    color: 'white',
  },

  titlePackage: {
    color: '#090F47',
    fontSize: 15,
    marginLeft: 10,
  },
  // titleFi: {
  //   fontsize: 12,
  //   color: '#FFA41B',
  // },
  priceAva: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#3399FF',
  },
  priceIndi: {
    backgroundColor: '#0099FF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default DetailProduct;