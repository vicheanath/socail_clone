import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { colors } from '../Colors';
import { Feather, AntDesign } from '@expo/vector-icons';

//const { width } = Dimensions.get('window');
const width = 250;
const height = width / 2;//60%
export default class Story extends Component {
    
    render() {
        
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ marginHorizontal: 15, fontWeight: "bold", fontSize: 18, marginTop: 8, }}>Story</Text>
                    <TouchableOpacity>
                        <Text style={{ marginHorizontal: 15, fontSize: 15, marginTop: 10, color: colors.primariy }}>View All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={width, height}>
                    <TouchableOpacity >
                        <View style={styles.plus}>
                            <AntDesign name="plus" size={30} color={colors.primariy} />

                        </View>
                        <Text style={{ alignSelf: "center" }}>You</Text>
                    </TouchableOpacity>
                    {
                        this.props.user.map((item, index) => (
                            <View style={{ flexDirection: "column" }}>
                                <TouchableOpacity style={styles.story}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.img}
                                    />
                                </TouchableOpacity>
                                <Text style={{ alignSelf: "center" }} >{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,

    },
    dot: {
        flexDirection: 'row',
        position: "absolute",
        bottom: 5,
        justifyContent: 'center'
    },
    story: {
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: 70,
        margin: 10,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: colors.primariy,
    },
    plus: {
        height: 70,
        width: 70,
        margin: 10,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: colors.primariy,
        alignItems: "center",
        justifyContent: "center",
    }
});
