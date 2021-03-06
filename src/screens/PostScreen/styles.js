import { HeaderTitle } from '@react-navigation/stack';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import { StyleSheet, ImageBackground } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      padding: 19,
      margin: 10,
    },
    Imagecontainer: {
      flex: 1,
      justifyContent: "space-between",
      margin: 12,
    },
      Photocontainer: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
    },
   
    header:{
         flexDirection: "row",
         justifyContent: "space-between",
          paddingHorizontal: 12,
          paddingVertical: 5,
          borderBottomWidth: 1,
          borderBottomColor: "#D8D9DB"
    },
    Postheader:{
      flexDirection: "row",
      justifyContent: "space-between",
       paddingHorizontal: 10,
       paddingVertical: 2,
       borderBottomColor: "#D8D9DB"
 },
 header:{
  flexDirection: "row",
  justifyContent: "space-between",
   paddingHorizontal: 12,
   paddingVertical: 5,
   borderBottomColor: "#D8D9DB"
},
 top:{
    flexDirection: "row",
    alignSelf: "flex-start",
    width: 50,
    height: 50,
    borderRadius: 100/2,
    },
    
    middle: {
      flex: 0.3,
      backgroundColor: "beige",
      borderWidth: 5,
    },
    bottom: {
      flex: 0.3,
      backgroundColor: "pink",
      borderWidth: 10,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 20,
    },
    thumbnail:{
      width: "100%",
      height: "100%",
    },
    photo:{
      marginLeft: 225,
      alignItems: "flex-end",
      marginHorizontal: 32
    }
  });

