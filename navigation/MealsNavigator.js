import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../constants/Colors';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoryScreen,
            navigationOptions: {
                headerTitle: 'Meal Categories',
            },
        },
        CategoryMeals: {
            screen: CategoryMealScreen,
        },
        MealDetail: MealDetailScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoriteScreen,
        MealDetails: MealDetailScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const MealsFavNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                // tabBarLabel: 'Meals',
                tabBarIcon: (tabInfo) => (
                    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                ),
            },
        },
        Favorites: {
            screen: FavNavigator,
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: (tabInfo) => (
                    <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
        },
    }
);

export default createAppContainer(MealsFavNavigator);
