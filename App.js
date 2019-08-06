import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import MainGameListComponent from './components/MainGameListComponent';
import DataVisComponent from './components/DataVisComponent' ;

export default class App extends Component {
  render() {
    return (
      <Text>App Stack Navigation tag</Text>
    );
  }
}
 //const AppStackNavigator = createStackNavigator({
  // Home: { screen: MainGameListComponent },
   //DataVis: { screen: DataVisComponent }
 //});