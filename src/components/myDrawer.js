import { createDrawerNavigator } from "@react-navigation/drawer";
import MyProfile from "../views/myProfile";
import SiteEvent from "../views/siteEvent";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
 
import { Image, Text, View } from 'react-native';

 
import EmployeeBenefits from "../views/employeeBenefits";
import MyRequistion from "../views/myRequistion";
import Map from "../views/Map";
import ContactUs from "../views/contactUs";
import LoginAcount from "../views/loginAcount";
import Home from "../views/home";
import DrawerContent from "./drawerContent";
import MyRecord from "../views/myRecord";
import detailRecord from "../views/detailRecord";
import DetailProduct from "./Detail";


export default function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (

    <Drawer.Navigator initialRouteName="LoginAcount"
      drawerContent={(props) => <DrawerContent{...props} />}
      screenOptions={{
        drawerActiveTintColor: 'red',
        

      }}
    >

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          drawerIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: "My Profile",
          drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="EmployeeBenefits"
        component={EmployeeBenefits}
        options={{
          title: "Employee Benefits",
          drawerIcon: () => <AntDesign name="hearto" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="MyRequistion"
        component={MyRequistion}
        options={{
          title: "My Requistion",
          drawerIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="map"
        component={Map}
        options={{
          title: "Map",
          drawerIcon: () => <FontAwesome5 name="map" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="ContactUS"
        component={ContactUs}
        options={{
          // gestureEnabled: false,
          title: "Contact Us",
          drawerIcon: () => <Feather name="phone" size={24} color="black" />,
        }}
      />

      {/* <Drawer.Screen
        name="SiteEvent"
        component={SiteEvent}
        options={{ drawerHideStatusBarOnOpen: "" }}
      /> */}

      <Drawer.Screen
        name="SiteEvent"
        component={SiteEvent}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => null,
          title: "Sites Event",
          // drawerIcon: () => <MaterialIcons name="event-available" size={24} color="black" />,
        }}

      />


      <Drawer.Screen
        name="LoginAcount"
        component={LoginAcount}

        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          headerShown: false,
          // title: "Login Page",
          // drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="MyRecord"
        component={MyRecord}

        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          headerShown: false,
          // title: "Login Page",
          // drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
        <Drawer.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          headerShown: false,
          // title: "Login Page",
          // drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="DetailRecord"
        component={detailRecord}

        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          headerShown: false,
          // title: "Login Page",
          // drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />



    </Drawer.Navigator>


  );
}
