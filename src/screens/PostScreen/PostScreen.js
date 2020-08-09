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
                     <Text style={{ fontWeight: "900"}}>Post</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.header}>
            <TouchableOpacity>
              <View>
              <Image
        style={styles.top}
        source={require('../../../assets/tempAvatar.jpg')}
      />
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <TextInput
             autoFocus={ true }
             multiline={true}
             numberOfLines={ 4 }
             style={{ flex: 1}}
             placeholder="Want to share something?"
            ></TextInput>
                 </TouchableOpacity>
            </View>
                
           
        <View style={styles.container}>
          
         
        </View>
     </SafeAreaView>
      );
  }

