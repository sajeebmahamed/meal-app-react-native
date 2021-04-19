import React from 'react';
import { StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find((c) => c.id === catId);
    const displayMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

    return <MealList listData={displayMeals} navigation={navigation} />;
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
