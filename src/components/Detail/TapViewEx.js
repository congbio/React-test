import * as React from 'react';
import { View, useWindowDimensions, Text} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
 
const FirstRoute = () => (
  <View style={{ flex: 1,  color: 'black'}}>

  </View>
);
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'darkgrey'}} >
  	<Text>Tab Two</Text>
  </View>
);
 
export default function TabViewMenu() {
  const layout = useWindowDimensions();
 
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
  { key: 'first', title: 'Thông tin' },
  { key: 'second', title: 'Nhận xét' },
  ]);
 
  const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  });
 
  const renderTabBar = props => (
  	<TabBar
     	 {...props}
      	activeColor={'grey'}
      	inactiveColor={'black'}
          style={{marginTop:25,backgroundColor:'white'}}
  	/>
  );
 
  return (
  	<TabView
      	navigationState={{ index, routes }}
      	renderScene={renderScene}
      	renderTabBar={renderTabBar}
      	onIndexChange={setIndex}
      	initialLayout={{ width: layout.width }}
  	/>
  );
}