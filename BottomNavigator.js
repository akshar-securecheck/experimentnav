import { StyleSheet, Text, View ,TouchableOpacity,Button,Image,FlatList} from 'react-native'
import React, {useState,useEffect,Component} from 'react' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import Icon from 'react-native-vector-icons/Ionicons';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    
 <View style={{flex: 1, backgroundColor: 'pink',flexDirection:'row'}}> 

    <Tab.Navigator
      initialRouteName="Screen1"       
      screenOptions={{
        tabBarShowLabel: 'false', 
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        "screenStyle": [
          {
            "display": "flex",
             "color": "green"
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="CWICKO HOME"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./assets/cwickologo.png')}
                style={{
                  width: 5,
                  height: 5,
                  tintColor: tabInfo.focused ? '#ff66b3' : 'lightgrey',
                }}
              />
            );
          },
        }} 
      />      
      <Tab.Screen
        name="FILESTORAGE"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./assets/cwickologo.png')}
                style={{
                  width: 5,
                  height: 5,
                  tintColor: tabInfo.focused ? '#ff66b3' : 'lightgrey',
                }}
              />
            );
          },
        }} 
      />
      <Tab.Screen
        name="MARKETPLACE"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./assets/cwickologo.png')}
                style={{
                  width: 5,
                  height: 5,
                  tintColor: tabInfo.focused ? '#ff66b3' : 'lightgrey',
                }}
              />
            );
          },
        }} 
      />
      <Tab.Screen
        name="ACCOUNT"
        component={Screen4}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./assets/cwickologo.png')}
                style={{
                  width: 5,
                  height: 5,
                  tintColor: tabInfo.focused ? '#ff66b3' : 'lightgrey',
                }}
              />
            );
          },
        }} 
      />
    </Tab.Navigator> 
    </View>
  );
};

export default BottomNavigator;


const homepage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    flexDirection: 'column'
  },
  links:{
    margin:6,
    fontSize:16,
    fontWeight: 'bold',  padding:1, textDecorationLine:'underline'
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  accordion: {
    backgroundColor:'pink',width:'50%',margin:'5%' 
  },
  accordiontext: {
    color:'black',fontSize:20,padding:'5%'},
  tinyLogo: {
    width:100,height:100,margin:10
  }
});
