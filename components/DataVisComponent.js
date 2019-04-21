import React, { Component } from 'react';
import View from 'react-native';
import FooterComponent from './FooterComponent';

export default class DataVisComponent extends Component {
    render() {
        return (
            <View>
                <Text>This is the Data Visualization Component.</Text>
                <FooterComponent></FooterComponent>
            </View>
        );
    }
};