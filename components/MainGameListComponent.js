import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, Image} from 'react-native';
import { getAllGames } from '../databases/GameSchema';
import realm from '../databases/GameSchema';
import Swipeout from 'react-native-swipeout';
import HeaderComponent from './HeaderComponent';
import PopupGameComponent from './PopupGameComponent';
import FooterComponent from './FooterComponent';
import DataVisComponent from './DataVisComponent';

let FlatListItem = props => {
    const { gameIndex, id, creationDate, popupGameComponent, 
        name1, name2, name3, name4, name5, name6} = props;
    toResume = () => {

    };
    toDeleteConfirmation  = () => {

    };
    toSingleGameData = () => {

    };
    return (
        <Swipeout left={[
            {
                text: 'Resume',
                backgroundColor: 'orange',
                onPress: toResume
            },
            {
                text: 'Delete',
                backgroundColor: 'gold',
                onPress: toDeleteConfirmation
            },
            {
                text: 'Data',
                backgroundColor: 'purple', //change swipeout colors to red,orange,gold maybe??
                onPress: toSingleGameData
            }
        ]} autoClose={true}>
            <TouchableOpacity>
                <View style={{ backgroundColor: gameIndex % 2 == 0 ? '#666666' : '#808080' }}>
                    <Text style={styles.gameDate}>
                        <Image style={styles.hexImg} source={require('../images/hex.png')}/>
                        {' ' + creationDate.toLocaleString()}
                    </Text>
                    <Text style={styles.playerNames} numberOfLines={2}>
                    {'Players: ' + name1 + ' - ' + name2 + ' - ' + name3 + 
                    '- ' + name4 + ' - ' + name5 + ' - ' + name6}
                    </Text>
                </View>
            </TouchableOpacity>
        </Swipeout>
    );
}

export default class MainGameListComponent extends Component {

    //removes header from navigator
    //static navigationOptions = {
        //header: null
    //}

    constructor(props) {
        super(props);
        this.state = {
            gameLists: []
        };

        this.reloadData();
        realm.addListener('change', () => {
            this.reloadData();
        });
    }
    reloadData = () => {
        getAllGames().then((gameLists) => {
            this.setState({ gameLists });
        }).catch((error) => {
            this.setState({ gameLists: [] });
        });
        console.log('game lists reloaded')
    }
    render() {
        return (
        <View style={styles.container}>
            <HeaderComponent title={'Catan Game List'}
                hasAddButton={true}
                hasDeleteAllButton={true}
                showAddGameList={
                    () => {
                        this.refs.popupGameComponent.showGamePopup();
                    }
                }
            />
            <FlatList
                style={styles.flatList}
                data={this.state.gameLists}
                renderItem={({ item, index }) => <FlatListItem {...item} 
                gameIndex={index}
                popupGameComponent={this.refs.popupGameComponent}
                />
            } keyExtractor={item => item.id}
            />
            <PopupGameComponent ref={'popupGameComponent'}/>
            <FooterComponent
            isHomeSelected={true}
            isDataVisSelected={false}>
            </FooterComponent>
        </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    flatList: {
        flex: 1,
        flexDirection: 'column',
    },
    gameDate: {
        fontFamily: 'Roboto', 
        fontSize: 18, 
        margin: 10,
    },
    playerNames: {
        fontFamily: 'Roboto', 
        fontSize: 14, 
        marginLeft: 10,
        marginBottom: 10, 
    },
    hexImg: {
        width: 20,
        height: 20,
        tintColor: 'gold',
        justifyContent: 'flex-end',
    },
});