import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { colors } from '../Colors';
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default class PostCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.post.map((item, index) => (
                        <>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <View style={styles.avata}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{
                                                width: 60,
                                                height: 60,
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ paddingHorizontal: 15, marginTop: 15, fontSize: 18, }}>{item.name}</Text>
                                        <Text style={{ paddingHorizontal: 15, fontSize: 12, color: colors.black, }}>{item.time} • Public</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ alignItems: 'center', padding: 10, }}>
                                    <Feather name="chevron-down" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ marginVertical: 10, }}>{item.caption}</Text>
                            <View style={styles.card}>
                                <View>

                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.image}
                                    />

                                </View>
                            </View>
                            <View style={styles.buttom}>
                                <View style={styles.left}>
                                    <TouchableOpacity style={{ padding: 5, flexDirection: "row" }}>
                                        <AntDesign name="like2" size={28} color={colors.primariy} />
                                        <Text style={{ padding: 6, }}>{item.love}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ padding: 8, flexDirection: "row" }}>
                                        <FontAwesome5 name="comment-alt" size={24} color={colors.primariy} />
                                        <Text style={{ padding: 6, }}>{item.coment}</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Feather name="share" size={24} color={colors.black} style={{ margin: 5, }} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.coment}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="comment......"
                                />
                                <TouchableOpacity style={{ position: "absolute", right: 12, top: 10, }}>
                                    <Feather name="send" size={24} color={colors.black} />
                                </TouchableOpacity>
                            </View>
                        </>
                    ))
                }
            </View>
        );

    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderColor: colors.gray2,
    },
    left: {
        flexDirection: "row",
    },
    buttom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    container: {
        margin: 15,
    },
    card: {
        backgroundColor: colors.gray1,
        height: 400,
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: "cover",
    },
    avata: {
        width: 60,
        height: 60,
        overflow: 'hidden',
        borderRadius: 30,
        marginVertical: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
