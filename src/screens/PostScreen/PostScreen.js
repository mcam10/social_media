import React, { useState,useEffect } from 'react'
import { Image, Text, TextInput, Button, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';



export default function PostScreen({ navigation, route }){

    const [postText, setPostText] = React.useState('');

    const [postImage, setPostImage] = React.useState(null);


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
                            this.postText = ''
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
             blurOnSubmit = {true}
            ></TextInput>
              <View style={styles.photo}>
              </View>
                 </TouchableOpacity>
            </View>
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.photo} onPress={() => {
                // launch camera in order to post pic or video
            }}>
          <Ionicons name="md-camera" size={24} color="grey"></Ionicons>
              </View>
            </TouchableOpacity>
        </View>
     </SafeAreaView>
    );
  }
 

function componentDidMount() {
      getPermissionAsync();
}

const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }


const _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result)
        } catch (E) {
          console.log(E)
        }
    }




