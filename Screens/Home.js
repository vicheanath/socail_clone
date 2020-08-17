import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Story from './../Components/Story';
import Header from './../Components/Header';
import PostCard from './../Components/PostCard';
import Postbox from './../Components/Postbox';
import { user, post } from './../Data';
import { colors } from './../Colors';

import API from './../API'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        API.get('/products')
            .then(res => {
                console.log(res.data)
                this.setState({ data: res.data })
            })
    }
    render() {



        return (
            <SafeAreaView>
                <Header />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Story user={this.state.data} />
                    <Postbox />
                    <PostCard post={this.state.data} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({

});