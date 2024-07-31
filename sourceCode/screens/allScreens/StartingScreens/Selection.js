/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const selected = [
    {id:1, name: 'internship', img : require('../../assets/file1.png')},
    {id:2, name: 'I need Job', img : require('../../assets/file3.png')},
    {id:3, name: 'I want to hire', img : require('../../assets/file2.png')},
];


const Selection = () => {
  return (
      
       
      <SafeAreaView style={styles.contentContainer} >
        <View style={styles.container}>{
        selected.map((item) =>(
            <View style={styles.profile}>
            <View style={styles.imgContainer}><Image
            style={styles.image}
            source={item.img}
            resizeMode='contain'
            /></View>
            <View  style={styles.textcontainer}><Text  style={styles.text}>{item.name}</Text></View>
            </View>

        ))
        }
       </View>
      </SafeAreaView>

  );
};


export default Selection;


const styles = StyleSheet.create({
    contentContainer: {
        flex:1,
        backgroundColor:'#3DB2FF',
      },
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:30,
    },
    
    profile:{
        backgroundColor:'#3DB2FF',
        flex:1,
    

    },
    imgContainer:{
        color:'green',
        backgroundColor: '#85c4ee',
        height:170,
        width:170,
        borderRadius:85,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        elevation:8,
        shadowColor:'black',
        
    },
    image: {
        height:210,

   },
   textcontainer :{
    alignItems:'center',
    
 },
 text: {
    fontSize:25,
 }

});