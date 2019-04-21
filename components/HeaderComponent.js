import React, { Component } from 'react';
import { 
    StyleSheet, View, Text, TouchableOpacity,
    Platform, Image, Alert
} from 'react-native';

import { deleteAllGameLists } from '../databases/GameSchema';

//TODO: import functions

const HeaderComponent = props => {
    const { title, hasAddButton, showAddGameList, hasDeleteAllButton } = props;
    return (
        <View style={styles.container}>
        <Text style={styles.titleText}>Catan Game Companion</Text>
        {hasAddButton && <TouchableOpacity style={styles.button}
            onPress={showAddGameList}>
                <Image style={styles.addButtonImg} source={require('../images/add.png')} />
            </TouchableOpacity>}
            {hasDeleteAllButton && <TouchableOpacity style={styles.button} onPress={
                () => {
                    Alert.alert(
                        'Delete all',
                        'Are you sure you want to delete all games?',
                        [
                            {
                                text: 'No', onPress: () => { },
                                style: 'cancel'
                            },
                            {
                                text: 'Yes', onPress: () => {
                                    deleteAllGameLists().then().catch((error) => {
                                        alert('Delete all games has failed');
                                    });
                                }
                            },
                        ],
                        { cancelable: true}
                    )
                }
            }>
                <Image style={styles.addDeleteImg} source={require('../images/delete.png')}/>
            </TouchableOpacity>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#404040',
        height: Platform.OS === 'android' ? 90 : 80,
    },
    titleText: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'San Francisco',
        position: 'relative',
        textAlign: 'left',
        marginRight: 50,
    },
    button: { 
        zIndex: 2,
    },
    addButtonImg: {
        width: 42,
        height: 42,
        tintColor: 'gold',
        marginRight: 20,
    },
    addDeleteImg: {
        width: 42,
        height: 42,
        tintColor: 'gold',
        marginBottom: 4,
        marginRight: 10,
    }
});

export default HeaderComponent;