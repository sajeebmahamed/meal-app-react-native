import React from 'react';
import { StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = ({ navigation }) => {
    const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
    return <MealList listData={favMeals} navigation={navigation} />;
};
FavoriteScreen.navigationOptions = {
    headerTitle: 'Your Favorite',
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoriteScreen;
