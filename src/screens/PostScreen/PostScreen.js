import React, { useState,useEffect } from 'react'
import { Keyboard, Image, Text, TextInput, Button, TouchableOpacity, View, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';



export default function PostScreen({ navigation, route }){
    // adding text state
    const [postText, setPostText] = React.useState('');
    // adding image state
    const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };


const renderImage = () =>{
  if (selectedImage !== null) {
    return (
      <View style={styles.Photocontainer}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.bottom}
        />
      </View>
    );
  }
}
useEffect(() => {

  renderImage();

});
 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="md-arrow-back" size={24} color="black"></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
                     <Text style={{ fontWeight: "900"}} 
                     onPress={() => {
                            // pass params back to home sceeen
                            navigation.navigate('Home', {post: postText});
                    }}
                     >Post</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.Postheader}>
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
                value={postText}
                onChangeText={setPostText}
                placeholder="Want to share something?"
                blurOnSubmit={true}
	        onSubmitEditing={Keyboard.dismiss}/>
              <View style={styles.photo}>
              </View>
            </TouchableOpacity>
            </View>
        <View style={styles.Imagecontainer }>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.photo}>
                <Ionicons name="md-camera" size={24} color="grey"></Ionicons>
            </TouchableOpacity>
        </View>
     </SafeAreaView>
    );
  }
 





