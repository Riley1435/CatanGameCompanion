import React, { Component } from 'react';
import { 
    StyleSheet, View, Text, TouchableOpacity,
    Platform, Image, Alert
} from 'react-native';

//Add home icon and data chart icon on the left of each button.
const FooterComponent = props => {
    const { isHomeSelected, isDataVisSelected } = props;
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
            onPress={() => {

            }}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => {

            }}>
                <Text style={styles.buttonText}>Game Data</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#404040',
        height: 60,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        
    },
    button: {
        width: '50%',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#808080',
        margin: 10,
    },
});

export default FooterComponent;