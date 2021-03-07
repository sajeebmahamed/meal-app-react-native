import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MealItem = ({ title, onSelectMeal, duration, complexity, affordability, image }) => (
    <View style={styles.mealItem}>
        <TouchableOpacity onPress={onSelectMeal}>
            <View>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground source={{ uri: image }} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>
                                {title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text> {duration}m </Text>
                    <Text> {complexity} </Text>
                    <Text> {affordability} </Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);
const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});

export default MealItem;
