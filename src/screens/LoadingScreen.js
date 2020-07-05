import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function LoadingScreen(){
    return(
        <View style={styles.container}>
            <Text>Loading Screen</Text>
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
