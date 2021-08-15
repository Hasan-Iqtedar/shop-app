import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const ProductCard = props => {
    return (
        <View style={styles.card}>
            <ImageBackground source={{ uri: props.imageURL }} style={styles.backgroundImage}>
                {props.children}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 220,
        borderRadius: 10,
        margin: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
});

export default ProductCard;