import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {heightPixels, widthPixels} from '../util/PixelPerfectHelper';
import {testingCardHeight, testingCardWidth, testingFontSize, testingLeftPadding} from '../constants/TestingNumbers';

// Purpose Explore pixel perfect mock up from sketch to app
export default function TabOneScreen() {
    return (
        <ScrollView contentContainerStyle={{paddingLeft: widthPixels(testingLeftPadding)}} style={styles.container}>

            <Text style={styles.title}>Text scaling test: Perfect</Text>
            <View style={{
                backgroundColor: 'red',
                height: heightPixels(testingCardHeight),
                width: widthPixels(testingCardWidth),
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Text>Width size scaled from {testingCardWidth} to {Math.round(widthPixels(testingCardWidth))}</Text>
                <Text>Height size scaled from {testingCardHeight} to {Math.round(widthPixels(testingCardHeight))}</Text>
            </View>
            <View style={styles.separator}/>
            <Text>Device width: {Math.round(wp('100%'))} height: {Math.round(hp('100%'))}</Text>
            <Text>Font size scaled from {testingFontSize} to {Math.round(widthPixels(testingFontSize))}</Text>
            <Text>Padding size scaled from {testingLeftPadding} to {Math.round(widthPixels(testingLeftPadding))}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: widthPixels(testingFontSize),
    },
    separator: {
        marginVertical: heightPixels(30),
        height: heightPixels(1),
        backgroundColor: 'black',
        width: '80%',
    },
});
