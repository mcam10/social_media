import * as React from 'react';
import {View, Text, StyleSheet,ActivityIndicator } from 'react-native';

export default function LoadingScreen(){
    return(
        <View style={styles.container}>
            <Text>Loading..</Text>
            <ActivityIndicator size="large" color ="#00ff00"></ActivityIndicator>
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})
