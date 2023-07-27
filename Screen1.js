import { StyleSheet, Text, View ,TouchableHighlight,TouchableOpacity,Button,Image,FlatList,ScrollView} from 'react-native'
import React, {useState,useEffect,Component} from 'react' 
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentComp from './documentcomp.js'; 
import ImageComp from './imagecomp.js';


const Screen1 = () => { 
  const [showDocumentcomp, setShowDocumentcomp] = useState(false);
  const [showImagecomp, setShowImagecomp] = useState(false); 
  const [currentView, setCurrentView] = useState('Documentview');

{/* <View style={homepage.container}>  
  <View style={{flex: 1, backgroundColor: 'pink',flexDirection:'row'}}>
 <TouchableOpacity style={homepage.links}>
   <Text>MarketPlace   |</Text> 
 </TouchableOpacity>
 <TouchableOpacity style={homepage.links}>
   <Text>MyFileStack   |</Text> 
 </TouchableOpacity>
 <TouchableOpacity style={homepage.links}>
   <Text>HireAssist</Text>
 </TouchableOpacity>
 </View>  
 <Text style={{fontSize:30,color:'pink',backgroundColor:'cornflowerblue'}}>INKSTAK</Text>
 <View style={{flex: 3, backgroundColor: 'blue',flexDirection:'row'}}>
     
     <TouchableOpacity onPress={() => setCurrentView('DocumentView')}>
     <Image style={homepage.tinyLogo} source = {require('./assets/images/document.png')} />
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => setCurrentView('ImageView')}>
     <Image style={homepage.tinyLogo} source = {require('./assets/images/image.png')} />
     </TouchableOpacity>        
       
 </View> 
 <View style={{flex:8, backgroundColor: 'blue' }}>
 {currentView === 'DocumentView' && <DocumentComp/>}
 {currentView === 'ImageView' && <ImageComp/>}
 </View>
 <View style={{flex:5, backgroundColor: 'blue' }}></View>
 </View> */}
 return (
 <ScrollView>
  <View style={{ flexDirection: 'row', backgroundColor:'#ff66b3', justifyContent: 'center', alignItems: 'center' }}> 
 <Image style={{width:75,height:75,margin:4,borderRadius:4,paddingBottom:5,}} source = {require('./assets/cwickologo.png')}  /> 
 <Text style={{fontSize:60,backgroundColor:'#ff66b3',color:'yellow',padding:10,fontWeight:'bold'}}>CWICKO</Text> 
  </View><Text style={{fontSize:20,backgroundColor:'#ff66b3',color:'white',textAlign: 'center',padding:10}}>Print Easy. Anywhere.</Text>
    <View style={styles.container}>
       
        <View style={styles.leftColumn}>
          {/* {[...Array(20)].map((_, index) => (
            <View key={index} style={styles.row} />
          ))} */}                      
      


    <TouchableOpacity onPress={() => setCurrentView('DocumentView')}  style={{paddingBottom:10}} >
      <Image style={{width:75,height:75,margin:4,borderRadius:4,paddingBottom:5}} source = {require('./assets/images/document.png')}  />
    <Text>Documents</Text></TouchableOpacity> 
    <TouchableOpacity  onPress={() => setCurrentView('ImageView')} style={{paddingBottom:10}}>
      <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/image.png')} />
    <Text>Images</Text></TouchableOpacity>
    <TouchableOpacity  onPress={() => setCurrentView('DocumentView')}  style={{paddingBottom:10}} >
      <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/paperbags.png')} />
      <Text>PaperBags</Text></TouchableOpacity>
    <TouchableOpacity  onPress={() => setCurrentView('ImageView')} style={{paddingBottom:10}}>
      <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/tshirts.png')} />
      <Text>T-Shirts</Text></TouchableOpacity>
    <TouchableOpacity  onPress={() => setCurrentView('DocumentView')}  style={{paddingBottom:10}} >
      <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/notebooks.png')} />
      <Text>Notebooks</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => setCurrentView('DocumentView')}  style={{paddingBottom:10}} >
      <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/paperpouches.png')} />
      <Text>PaperPouche</Text></TouchableOpacity>
    <TouchableOpacity  onPress={() => setCurrentView('DocumentView')}  style={{paddingBottom:10}} >
      <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/visitingcards.png')} />
      <Text>VisitingCard</Text></TouchableOpacity>
    <TouchableOpacity  onPress={() => setCurrentView('DocumentView')}  style={{paddingBottom:10}} >
      <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/mugs.png')} />
      <Text>Mugs</Text></TouchableOpacity> 
    <TouchableOpacity onPress={() => setCurrentView('DocumentView')}  style={{paddingBottom:10}}  >
    <Image style={{width:75,height:75,margin:4,borderRadius:4}} source = {require('./assets/images/posters.png')} />
    <Text>Posters</Text></TouchableOpacity>   
            </View>


        <View style={styles.rightColumn}>     
           
        <TouchableHighlight style={{paddingBottom:10,paddingTop:20}}><Icon.Button
  name="qrcode"
  backgroundColor="#3b5998"
  onPress={this.loginWithFacebook}>
  Share Files using QrCode
</Icon.Button></TouchableHighlight>  

<TouchableHighlight style={{paddingBottom:10}}>
<Icon.Button
  name="map-marker"
  backgroundColor="#3b5998"
  onPress={this.loginWithFacebook}>
  Find PrintStore Near Me
</Icon.Button></TouchableHighlight> 
          {currentView === 'DocumentView' && <DocumentComp/>}
 {currentView === 'ImageView' && <ImageComp/>}
        </View>


          
      </View>
    </ScrollView> );
};
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

const homepage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
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

export default Screen1 ;





