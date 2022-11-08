// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Picker,
} from "react-native";
import React, { useState } from "react";
import BottomBar from "../components/bottomBar";
import { AntDesign } from "@expo/vector-icons";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { useNavigation } from "@react-navigation/native";
import DATA from "../data/data";

export default function MyRecord() {
  const [displayAdd, setDisplayAdd] = useState(false);
  const navigation = useNavigation();
 
  const[getData, setData]=useState(DATA);
 
  const [getNumber, setNumber]= useState('');
  const [getName, setName]= useState('');
  const [getType, setType]= useState('');
  const [getStatus, setStatus ]= useState('');
  const [getDay, setDay]= useState('');
  const [getRedNumber, setRedNumber]= useState('');

  const Number = ({ number }) => {
    return (
      <View>
        <Text style={styles.number}>{number} </Text>
      </View>
    );
  };

  const Name = ({ name }) => {
    return (
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  };

  const Type = ({ type }) => {
    return (
      <View>
        <Text style={styles.type}>{type}</Text>
      </View>
    );
  };

  const Status = ({ status }) => {
    return (
      <View>
        <Text style={styles.status}>{status}</Text>
      </View>
    );
  };

  const Day = ({ day }) => {
    return (
      <View>
        <Text style={styles.day}>{day}</Text>
      </View>
    );
  };

  const RedNumber = ({ rednumber }) => {
    return (
      <View>
        <Text style={styles.rednumber}>{rednumber}</Text>
      </View>
    );
  };

  function renderItem({ item }) {
    return (
      <View style={styles.viewFlatList}>
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate("DetailRecord", {
              item,   
            })
          }
        >
          <View style={styles.leftItem}>
            <Number number={item.number}></Number>
            <Name name={item.name}></Name>
            <Type type={item.type}></Type>
          </View>
          <View style={styles.rightItem}>
            <Status status={item.status}></Status>
            <Day day={item.day}></Day>
            <RedNumber rednumber={item.rednumber}></RedNumber>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function addNewItem(){
    var newArray = [...getData , {
      id:9,
      number:getNumber,
      name:getName,
      type:getType,
      status:getStatus,
      day:getDay,
      rednumber:getRedNumber,
      detail:{
        recordStatus: 'Submitted',
        job:'80621 - 2C - Southbank Boulevard',
        foreman:'Erin Maker',
        engneer:'Firmin Li',
        location: 'Quận Sơn Trà Đà Nằng Việt Nam',
        totalEffort:'0 Hours 3 mins'
      },
      itemDetail:{
        number:123,
        uom:'Kilogram',
        rate:'$112 00',
        quantity:'25',
        proposed:'$2,800,00',
        comment:'Test comment'
      },
    },];

    setData(newArray);
    setDisplayAdd(false);
  }
  return (
    <SafeAreaView style={styles.myRecordSafe}>
      {/* <StatusBar backgroundColor={"yellow"} /> */}
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Text style={styles.textHeader}>My Records</Text>
          <TouchableOpacity
            style={styles.iconSetting}
            onPress={() => setDisplayAdd(!displayAdd)}
          >
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {displayAdd ? (
          <View style={styles.formAdd}>
            <Text style={styles.titleForm}>Form Add New A Record</Text>

            <View style={styles.viewinput}>
              <Text style={styles.titleinput}>Number</Text>
              <TextInput
                style={styles.textinput}
                keyboardType="email-address"
                placeholder="   Enter number of Record"
                onChangeText={setNumber}
              />
              <Text style={styles.titleinput}>Name</Text>
              <TextInput
                style={styles.textinput}
                placeholder="    Enter name of Record"
                onChangeText={setName}
                // secureTextEntry={true}
              />
              <Text style={styles.titleinput}>Type</Text>

              <Picker
                style={styles.textinput}
                selectedValue={"payItem"}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setType(itemValue)}
              >
                <Picker.Item label="Pay Item" value="payItem" />
                <Picker.Item label="Docker" value="docker" />
              </Picker>

              <Text style={styles.titleinput}>Status</Text>

              <Picker
                style={styles.textinput}
                selectedValue={"draft"}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
              >
                <Picker.Item label="Draft" value="draft" />
                <Picker.Item label="Canceled" value="canceled" />
              </Picker>

              <Text style={styles.titleinput}>Day</Text>
              <TextInput
                style={styles.textinput}
                keyboardType="email-address"
                placeholder="   Enter number of Record"
                onChangeText={setDay}
              />
              <Text style={styles.titleinput}>RedNumber</Text>
              <TextInput
                style={styles.textinput}
                keyboardType="email-address"
                placeholder="   Enter Red number of Record"
                onChangeText={setRedNumber}
              />

            <TouchableOpacity style={styles.saveButton} onPress={addNewItem}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <FlatList
          data={getData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        
      </View>
      <BottomBar></BottomBar>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height:'90%'
  },
  myRecordSafe: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
  },
  viewHeader: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    height: 40,
    backgroundColor: "white",
  },
  iconSetting: {
    position: "absolute",
    right: 10,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 20,
  },
  item: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    height: 80,
    padding: 10,
  },
  leftItem: {
    width: "70%",
  },
  rightItem: {
    flex: 1,
    alignItems: "flex-end",
  },
  day: {
    color: "black",
  },
  viewFlatList: {
    padding: 15,
    // borderWidth:1
  },
  number: {
    fontWeight: "bold",
  },
  type: {
    fontSize: 12,
  },
  status: {
    color: "blue",
    fontWeight: "bold",
  },
  day: {
    color: "grey",
    fontSize: 12,
  },
  rednumber: {
    color: "red",
  },

  // Form add
  formAdd: {
    position: "absolute",
    backgroundColor: "white",
    width: "85%",
    height: "80%",
    marginLeft: 25,
    marginTop: 50,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  titleForm: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: "25%",
  },
  titleinput: {
    fontWeight: "bold",
    color: "#595967",
    fontSize: 14,
  },
  viewinput: {
    padding: 30,
  },
  textinput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#595967",
    marginTop: "2%",
    width: "90%",
  },

  saveButton:{
    borderWidth:1,
    borderRadius:10,
    width:'40%',
    height:'7%',
    alignItems:'center',
    marginTop:30,
    marginLeft:80,
    backgroundColor:'pink'
  },
  saveButtonText:{
    fontWeight:"bold"
  }
});
