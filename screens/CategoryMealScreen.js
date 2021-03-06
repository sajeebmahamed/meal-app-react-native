import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoryMealScreen = ({ navigation }) => (
    <View style={styles.screen}>
        <Text> Category Meal Screen </Text>
        <Button
            title="Go to Details"
            onPress={() => {
                navigation.navigate({ routeName: 'MealDetail' });
            }}
        />
        <Button
            title="Go to back"
            onPress={() => {
                // navigation.goBack();
                navigation.pop();
            }}
        />
    </View>
);
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealScreen;
