import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { colors } from '../Colors';
import { Feather } from '@expo/vector-icons';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png' }} style={styles.logo} />
                    <View flexDirection="row">
                        <TouchableOpacity style={styles.btn, styles.left}>
                            <Feather name="search" size={24} color={colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn, styles.left}>
                            <Feather name="camera" size={24} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 130,
        resizeMode: "cover",
        marginLeft:15,
    },
    input: {
        backgroundColor: colors.gray2,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
    },
    left: {
        backgroundColor: colors.gray2,
        marginHorizontal: 10,
        padding: 8,
        height: 40,
        borderRadius: 20,
        marginRight:15,
    },
    btn: {
        alignItems: "center",
    },
    header: {
        justifyContent: "space-between",
        flexDirection: 'row',
        //paddingHorizontal: 15,
        marginTop: 25,
        height: 50,
    },
    container: {
        height: 72,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray2,
    },
});
