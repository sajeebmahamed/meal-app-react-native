import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {
    const renderMealItem = (itemData) => (
        <View>
            <Text> {itemData.item.title} </Text>
        </View>
    );
    const catId = navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find((c) => c.id === catId);
    const displayMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
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
