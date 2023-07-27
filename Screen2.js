import { StyleSheet, Text, View ,TouchableHighlight,TouchableOpacity,Button,Image,FlatList,ScrollView} from 'react-native'
import React, {useState,useEffect,Component} from 'react' 
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen2 = () => {
  return (
    <ScrollView>
  <View style={{ flexDirection: 'row', backgroundColor:'#ff66b3', justifyContent: 'center', alignItems: 'center' }}> 
 <Image style={{width:75,height:75,margin:4,borderRadius:4,paddingBottom:5,}} source = {require('./assets/cwickologo.png')}  /> 
 <Text style={{fontSize:60,backgroundColor:'#ff66b3',color:'yellow',padding:10,fontWeight:'bold'}}>CWICKO</Text> 
  </View><Text style={{fontSize:20,backgroundColor:'#ff66b3',color:'white',textAlign: 'center',padding:10}}>Print Easy. Anywhere.</Text>
    <View style={styles.container}>
<Text style={{ fontSize:20,justifyContent: 'center', alignItems: 'center' }}>MARKETPLACE</Text>          
      </View>
    </ScrollView>
  )
}

export default Screen2


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  leftColumn: {
    flex: 1,
    padding: 10,
  },
  rightColumn: {
    flex: 3,
    padding: 10,
  },
  row: {
    height: 50,
    backgroundColor: 'lightgray',
    marginBottom: 10,
  },
  singleRow: {
    height: 500,
    backgroundColor: 'lightgray',
  },
});
