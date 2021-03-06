import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = () => (
    <View style={styles.screen}>
        <Text> Meal Details Screen </Text>
    </View>
);
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealDetailScreen;
