import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import { colors } from '../Colors';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

const { W, H } = Dimensions.get('window');
export default class Notification extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="What's on your mind, Vichea"
                        placeholderTextColor={colors.black}
                    />
                </View>
                <ScrollView horizontal>
                    <TouchableOpacity style={styles.btn} onPress={this._pickImage}>
                        <Ionicons name="md-photos" size={20} color={colors.black} />
                        <Text style={{ marginLeft: 8, }}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Entypo name="emoji-happy" size={20} color={colors.black} />
                        <Text style={{ marginLeft: 8, }}>Feeling</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <MaterialIcons name="attach-file" size={24} color={colors.black} style={{ rotation: 90, }} />
                        <Text style={{ marginLeft: 8, }}>File</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        );
    }
}


const styles = StyleSheet.create({
    post: {
        backgroundColor: colors.gray2,
        margin: 15,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    btn: {
        flexDirection: "row",
        backgroundColor: colors.gray2,
        marginLeft: 15,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    container: {
        width: W,
    },
    input: {
        width: W,
        backgroundColor: colors.gray2,
        margin: 15,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 8,
    }
});
