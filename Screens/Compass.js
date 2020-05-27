import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../Colors';
import { Feather } from '@expo/vector-icons';

const { W, H } = Dimensions.get('window');
export default class Compass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Compass</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.gray2,
        justifyContent:"center",
        alignItems:"center",
    },
});
