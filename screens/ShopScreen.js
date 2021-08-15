import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button, Text } from 'react-native';

import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/dummy-data';

const ShopScreen = props => {

    const goToDetails = (data) => {
        props.navigation.navigate({
            name: 'productDetailsScreen',
            params: {
                imageURL: data.item.imageURL,
                title: data.item.title,
                description: data.item.description,
                price: data.item.price
            }
        });
    }


    const renderListItem = (data) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={goToDetails.bind(this, data)}>
                <ProductCard id={data.item.productId} imageURL={data.item.imageURL} >
                    <Text style={styles.title} >{data.item.title}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title='Details' color='white' onPress={goToDetails.bind(this, data)} />
                        <Button title='Add to Cart' color='white' />
                    </View>

                </ProductCard>
            </TouchableOpacity>
        );
    }


    return (
        <View style={styles.screen}>
            <View>
                <FlatList
                    data={PRODUCTS}
                    renderItem={renderListItem}
                    keyExtractor={(item) => item.productId}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'ghostwhite',
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
});

export default ShopScreen;