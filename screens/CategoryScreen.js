import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CATEGORIES from '../data/dummy-data';

const CategoryScreen = ({ navigation }) => {
    const renderGridItem = (itemData) => (
        <TouchableOpacity
            style={styles.gridItems}
            onPress={() => {
                navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: { categoryId: itemData.item.id },
                });
            }}
        >
            <View>
                <Text> {itemData.item.title} </Text>
            </View>
        </TouchableOpacity>
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
