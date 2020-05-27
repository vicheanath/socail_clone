import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Story from './../Components/Story';
import Header from './../Components/Header';
import PostCard from './../Components/PostCard';
import Postbox from './../Components/Postbox';
import { user, post } from './../Data';
import { colors } from './../Colors';
export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Story user={user} />
                    <Postbox/>
                    <PostCard post={post} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    
});