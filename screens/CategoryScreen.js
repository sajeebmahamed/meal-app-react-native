import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CATEGORIES from '../data/dummy-data';

const renderGridItem = (itemData) => (
    <View style={styles.gridItems}>
        <Text> {itemData.item.title} </Text>
    </View>
);

const CategoryScreen = ({ navigation }) => (
    <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
    />
);
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});

export default CategoryScreen;
