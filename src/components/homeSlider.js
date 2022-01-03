import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ViewSlider from 'react-native-view-slider';

const { width, height } = Dimensions.get('window');

export default function HomeSlide() {
  return (
    <>
      <ViewSlider
        renderSlides={
          <>
            <View style={styles.viewBox}>
              <Image
                source={{
                  uri: 'https://lavenderstudio.com.vn/wp-content/uploads/2017/09/chup-hinh-mon-an-2-copy.jpg',
                }}
                style={{ height, width }}
              />
            </View>
            <View style={styles.viewBox}>
              <Image
                source={{
                  uri: 'https://phunuketnoi.com/wp-content/uploads/2021/03/nhung-mon-an-hang-ngay-ngon-nhat-16m447845.jpg',
                }}
                style={{ height, width }}
              />
            </View>
            <View style={styles.viewBox}>
              <Image
                source={{
                  uri: 'https://cdn.tgdd.vn/Files/2017/01/10/936043/6-cach-ham-nong-thuc-an-ngon-nhu-moi-nau-2.png',
                }}
                style={{ height, width }}
              />
            </View>
            <View style={styles.viewBox}>
              <Image
                source={{
                  uri: 'https://cdn.beptruong.edu.vn/wp-content/uploads/2021/03/mon-kho-ngon-moi-ngay.jpg',
                }}
                style={{ height, width }}
              />
            </View>
          </>
        }
        style={styles.slider} //Main slider container style
        height={200} //Height of your slider
        slideCount={4} //How many views you are adding to slide
        dots={true} // Pagination dots visibility true for visibile
        dotActiveColor="red" //Pagination dot active color
        dotInactiveColor="gray" // Pagination do inactive color
        dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
        autoSlide={true} //The views will slide automatically
        slideInterval={10000} //In Miliseconds
      />
    </>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15,
  },
});