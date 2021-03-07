import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native';

const CategoryGridTile = ({ title, onSelect, color }) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItems}>
            <TouchableCmp style={{ flex: 1 }} onPress={onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
                    <Text style={styles.title}> {title} </Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 25,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
    },
});

export default CategoryGridTile;
