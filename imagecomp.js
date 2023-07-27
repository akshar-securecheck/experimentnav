import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState,useEffect,Component} from 'react'

const ImageComp = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  return (
    <View style={{flex: 10, backgroundColor: 'palegoldenrod'}} >   
    <TouchableOpacity
            onPress={() => setShowContent1(!showContent1)} style={homepage.accordion}><Text style={homepage.accordiontext}>+ Images</Text></TouchableOpacity>
          {showContent1 && (
            <Text>This IMAGE is the content that will be shown on TouchableOpacity press.</Text>
          )}
          <TouchableOpacity
            onPress={() => setShowContent2(!showContent2)} style={homepage.accordion}><Text style={homepage.accordiontext}>Choose Print</Text></TouchableOpacity>
          {showContent2 && (
            <Text>This is the content that will be shown on TouchableOpacity press.</Text>
          )}
    
          <TouchableOpacity
            onPress={() => setShowContent3(!showContent3)} style={homepage.accordion}><Text style={homepage.accordiontext}>Billing</Text></TouchableOpacity>
          {showContent3 && (
            <Text>This is the content that will be shown on TouchableOpacity press.</Text>
          )}
            </View>
  )
}

export default ImageComp


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