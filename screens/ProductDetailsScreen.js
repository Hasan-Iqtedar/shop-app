import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

import { Colors } from '../constants/Colors';


const ProductDetailsScreen = props => {

    const { imageURL, title, price, description } = props.route.params;

    return (

        <View style={styles.screen} >

            <ProductCard imageURL={imageURL} >
                <Text style={styles.title}> {title} </Text>
            </ProductCard>

            <View>
                <Text style={styles.heading}>Description</Text>
                <Text style={styles.description}> {description} </Text>
                <View style={styles.priceInfoContainer}>
                    <Text style={styles.price} >Price: </Text>
                    <Text style={styles.priceValue}> {price} </Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15
    },
    title: {
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'white',
        textAlign: 'center',
        fontSize: 22
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        marginVertical: 15,
        fontSize: 18,
        textAlign: 'center'
    },
    priceInfoContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.secondaryColor
    },
    priceValue: {
        fontSize: 20,
        color: Colors.primaryColor
    }
});

export default ProductDetailsScreen;