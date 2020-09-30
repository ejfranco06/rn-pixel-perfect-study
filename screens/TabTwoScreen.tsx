import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {testingCardHeight, testingCardWidth, testingFontSize, testingLeftPadding} from '../constants/TestingNumbers';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function TabTwoScreen() {
    return (
        <ScrollView contentContainerStyle={{paddingLeft: testingLeftPadding}} style={styles.container}>
            <Text style={styles.title}>Text scaling test: Relative</Text>

            <View style={{
                backgroundColor: 'red',
                height: testingCardHeight,
                width: testingCardWidth,
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Text>Width size fixed {testingCardWidth}</Text>
                <Text>Height size fixed {testingCardHeight}</Text>
            </View>
            <View style={styles.separator}/>
            <Text>Device width: {Math.round(wp('100%'))} height: {Math.round(hp('100%'))}</Text>
            <Text>Font size fixed {testingFontSize} </Text>
            <Text>Padding size fixed {testingLeftPadding} </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: testingFontSize,
    },
    separator: {
        marginVertical: 30,
        backgroundColor: 'black',
        marginHorizontal: 'auto',
        height: 1,
        width: '80%',
    },
});
