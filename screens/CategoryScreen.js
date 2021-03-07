import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoryScreen = ({ navigation }) => {
    const renderGridItem = (itemData) => (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: { categoryId: itemData.item.id },
                });
            }}
        />
    );
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategoryScreen.navigationOptions = {
    headerTitle: 'Meal Categories@@',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItems: {
        flex: 1,
        margin: 25,
        height: 150,
    },
});

export default CategoryScreen;
