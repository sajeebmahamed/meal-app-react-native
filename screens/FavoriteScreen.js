import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoriteScreen = () => (
    <View style={styles.screen}>
        <Text> Favo Screen </Text>
    </View>
);
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoriteScreen;
