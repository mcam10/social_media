import React, { useState,useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';



export default function PostScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="md-arrow-back" size={24} color="black"></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
                     <Text style={{ fontWeight: "800"}}>Post</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.top}>
                <TextInput
             autoFocus={ true }
             numberOfLines={ 2 }
             style={{ height: 20,  borderColor: 'black', borderWidth: 2,flexDirection:"row-reverse" ,borderBottomWidth: 2}}
             placeholder="Want to share something?"
            ></TextInput>
          </View>
           
        <View style={styles.container}>
          <View style={styles.middle} />
          <View style={styles.bottom} />
        </View>
     </SafeAreaView>
      );
  }

// export default function PostScreen({navigation}) {
//     return(
//         <SafeAreaView style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity>
//                     <Ionicons name="md-arrow-back" size={24} color="black"></Ionicons>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Text style={{ fontWeight: "800"}}>Post</Text>
//                 </TouchableOpacity>
//             </View>
//             <View styles={styles.inputontainer}>
//                 <Image source={require("../../../assets/tempAvatar.jpg")} styles={styles.avatar} resizeMode='contain'></Image>
//                 <TextInput
//                     autoFocus={ true }
//                     multiline={ true }
//                     numberOfLines={ 12 }
//                     style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}
//                     placeholder="Want to share something?"
//                 ></TextInput>
//             </View>
//             <TouchableOpacity style={styles.photo}>
//                 <Ionicons name="md-camera" size={32} color="grey"></Ionicons>
//             </TouchableOpacity>
//         </SafeAreaView>
//     )
//   }