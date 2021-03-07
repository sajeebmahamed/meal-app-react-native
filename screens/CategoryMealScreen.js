import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CATEGORIES from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((c) => c.id === catId);

    return (
        <View style={styles.screen}>
            <Text> {selectedCategory.title} </Text>
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
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((c) => c.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealScreen;
