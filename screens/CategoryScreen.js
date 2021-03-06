import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryScreen = () => (
    <View style={styles.screen}>
        <Text> Category Screen RN </Text>
    </View>
);
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryScreen;
