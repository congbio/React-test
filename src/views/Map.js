import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import * as React from 'react';
import { GeoCoordinates } from 'react-native-geolocation-service';
import BottomBar from '../components/bottomBar';
import Geolocation from 'react-native-geolocation-service';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Location from "expo-location";
import MapView, { Marker } from 'react-native-maps';
import Search from './Search';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { PRODUCT_DATA } from '../data/productData';
import axios from 'axios';


const api = 'https://6290540a27f4ba1c65b73fb1.mockapi.io/ReactNative';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ZOOMVALUE = 0.005;
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = ZOOMVALUE;
const LONGITUDE_DELTA = ZOOMVALUE * ASPECT_RATIO;
export default function Map({ route, navigator }) {
  const navigation = useNavigation(); 
  // const locationofaddress = route.params.user;

  const [visibleCarousel, setVisibleCarousel] = useState(false)
  const [activeSlide, setActiveSlide] = useState(1)
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  })

  useEffect(() => {
    const fetchData = async () => {
      const position = await getCurrentLocation();
      setLocation({
        ...location,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })

    }
    fetchData()
  }, []);


  const [dataLocation,setDataLocation]=useState([])

  const getapi =()=>{
      
      axios.get(api).then((response) => {
          setDataLocation(response.data);
        
      });
     
  }
  useEffect(() => { getapi() }, []);
  console.log(dataLocation);



  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      return location
    } catch (error) {
      console.log(error);
    }
  }

  const renderItem = ({ item, index }) => {

    return (

      <TouchableOpacity style={{ marginHorizontal: 20, height: 400, display: 'flex', backgroundColor: 'red' }}
        onPress={() => setLocation({
          ...location,
          latitude: item.latitude,
          longitude: item.longitude
        })}

      >
        {/* <Image source={item.img} /> */}
        <Image source={{ uri: `${item.img}`}} style={{ height: 100, width: 150 }} />
        <Text>{item.title}</Text>
        <Button
          onPress={ ()=>{
            navigation.navigate('DetailProduct',{motobike:item})
        } } 
          title="View"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Search />
      <MapView region={location} showsUserLocation style={styles.map}
        zoomEnabled={true}
        zoomControlEnabled={true}>
        {
        // !dataLocation ? <View>loading</View> :
        dataLocation.map((marker, index) => (
          <Marker
            coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
            title={marker.owner}
            description={marker.desc}
            key={marker.id}
            onPress={() => { setVisibleCarousel(true); setActiveSlide(index) }}

          >

            <View >
              <Image style={{ height: 40, width: 40 }} source={{uri:`${marker.img}`}} />
            </View>
          </Marker>
        ))
        }

      </MapView>
      {visibleCarousel && <View style={{ position: 'absolute', bottom: 60, marginBottom: 20, height: 150 }}>
        <Carousel
          // ref={carouselRef}
          data={dataLocation}
          renderItem={
            renderItem
          }
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH - 10}
          itemHeight={200}
          layout="default"
          firstItem={activeSlide}
          onSnapToItem={(index) => setActiveSlide(index)}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          onEndReachedThreshold={1}
          maxToRenderPerBatch={5}
        />
      </View>}
      <StatusBar style="auto" />
      <BottomBar></BottomBar>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});


