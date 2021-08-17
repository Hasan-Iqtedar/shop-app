import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from '../components/ProductCard';
import { removeProduct } from '../store/actions/products';


const UserProductsScreen = props => {

    const userProducts = useSelector((state) => state.products.userProducts);
    const dispatchAction = useDispatch();

    const removeUserProductHandler = (productId) => {
        dispatchAction(removeProduct(productId));
    }

    const renderListItem = (data) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => {
                props.navigation.navigate({
                    name: 'userProductDetails',
                    params: {
                        imageURL: data.item.imageURL,
                        price: data.item.price,
                        title: data.item.title,
                        description: data.item.description
                    }
                })
            }}
            >
                <ProductCard id={data.item.productId} imageURL={data.item.imageURL}>
                    <Text style={styles.title}>{data.item.title}</Text>

                    <View style={styles.buttonContainer}>
                        <Button title='Edit' color='white' onPress={() => {
                            props.navigation.navigate({
                                name: 'editProduct',
                                params: {
                                    productId: data.item.productId
                                }
                            });
                        }
                        } />
                        <Button title='Remove' color='white' onPress={removeUserProductHandler.bind(this, data.item.productId)} />
                    </View>

                </ProductCard>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>

            <View>
                <FlatList
                    data={userProducts}
                    renderItem={renderListItem}
                    keyExtractor={(item) => item.productId}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        backgroundColor: 'ghostwhite',
        padding: 10,
        flex: 1,
    },
    title: {
        marginBottom: 5,
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        textAlign: 'center',
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
});

export default UserProductsScreen;