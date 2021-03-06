import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoryScreen = ({ navigation }) => (
    <View style={styles.screen}>
        <Text> Category Screen RN </Text>
        <Button
            title="Go to Meals"
            onPress={() => {
                // navigation.navigate({ routeName: 'CategoryMeals' });
                // navigation.push('CategoryMeals');
                navigation.replace('CategoryMeals');
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

export default CategoryScreen;
