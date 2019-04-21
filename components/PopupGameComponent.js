import React, { Component } from 'react';
import { 
    StyleSheet, View, Text, TouchableOpacity,
    Platform, Image, TextInput 
} from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';

import { insertNewGame } from '../databases/GameSchema';

export default class PopupGameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name1: '',
            name2: '',
            name3: '',
            name4: '',
            name5: '',
            name6: '',
            visible: false
        };
    }

    showGamePopup = () => {
        this.setState({
            dialogTitle: 'Enter Player Names',
            name1: '',
            name2: '',
            name3: '',
            name4: '',
            name5: '',
            name6: '',
            visible: true
        });
    }

    //validate player input function to make sure no empty players
    //are passed to database.

    render() {
        const { dialogTitle } = this.state;
        return (
            <PopupDialog
            dialogTitle={<DialogTitle title={dialogTitle}/>}
            width={0.7} height={200}
            ref={"popupDialog"}
            visible={this.state.visible}>

            <View style={styles.container}>
            <View style={styles.row}>
                <TextInput style={styles.textInput} placeholder='Player 1' autoCorrect={false}
                onChangeText={(text) => this.setState({ name1: text })}
                value={this.state.name1} />
                <TextInput style={styles.textInput} placeholder='Player 2' autoCorrect={false}
                onChangeText={(text) => this.setState({ name2: text })}
                value={this.state.name2} />
                <TextInput style={styles.textInput} placeholder='Player 3' autoCorrect={false}
                onChangeText={(text) => this.setState({ name3: text })}
                value={this.state.name3} />
            </View>
            <View style={styles.row}>
                <TextInput style={styles.textInput} placeholder='Player 4' autoCorrect={false}
                onChangeText={(text) => this.setState({ name4: text })}
                value={this.state.name4} />
                <TextInput style={styles.textInput} placeholder='Player 5' autoCorrect={false}
                onChangeText={(text) => this.setState({ name5: text })}
                value={this.state.name5} />
                <TextInput style={styles.textInput} placeholder='Player 6' autoCorrect={false}
                onChangeText={(text) => this.setState({ name6: text })}
                value={this.state.name6} />
            </View>

                    <View style={styles.row}>

                        <TouchableOpacity onPress={ () => {
                            this.setState({ visible: false });
                            const newGameList = {
                                id: Math.floor(Date.now() / 1000),
                                creationDate: new Date(),
                                name1: this.state.name1,
                                name2: this.state.name2,
                                name3: this.state.name3,
                                name4: this.state.name4,
                                name5: this.state.name5,
                                name6: this.state.name6,
                            };
                                insertNewGame(newGameList);
                        }}>
                            <Text style={styles.button}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.setState({ visible: false });
                        }}>
                            <Text style={styles.button}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
            </View>

            </PopupDialog>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        padding: 5,
        margin: 5,
        borderColor: 'orange',
        borderWidth: 1
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'gold', //change border colors to colors of catan game pieces.
        padding: 5,
        margin: 5
    },
    textLabel: {
        color: 'white',
        fontSize: 18,
    },
});