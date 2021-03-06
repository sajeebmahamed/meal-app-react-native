import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = ({ navigation }) => (
    <View style={styles.screen}>
        <Text> Meal Details Screen </Text>
        <Button
            title="Go to back"
            onPress={() => {
                // navigation.goBack();
                navigation.popToTop();
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

export default MealDetailScreen;
