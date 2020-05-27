import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../Colors';
import { Feather } from '@expo/vector-icons';

const { W, H } = Dimensions.get('window');
export default class Notification extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Notification</Text>
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
