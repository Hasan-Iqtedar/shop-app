import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';

import { editProduct } from '../store/actions/products';
import { Colors } from '../constants/Colors';

const EditProductScreen = props => {
    const { productId, currentTitle, currentImageURL, currentPrice, currentDescription } = props.route.params;
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const dispatchAction = useDispatch();

    const getUpdatedValues = () => {
        return {
            title: title,
            imageURL: imageURL,
            description: description,
            price: price
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen} >
                <Text style={styles.title}>Add new Details</Text>
                <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Title: </Text>
                    <TextInput style={styles.input} maxLength={20} value={title} onChangeText={
                        (newText) => setTitle(newText)
                    }
                        placeholder={currentTitle}
                    />
                </View>

                <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Image URL: </Text>
                    <TextInput style={styles.input} maxLength={20} value={imageURL} onChangeText={
                        (newText) => setImageURL(newText)
                    }
                        placeholder={currentImageURL}
                    />
                </View>

                <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Description: </Text>
                    <TextInput style={styles.input} maxLength={20} value={description} onChangeText={
                        (newText) => setDescription(newText)
                    } 
                        placeholder={currentDescription}
                    />
                </View>

                <View style={styles.lableContainer}>
                    <Text style={styles.lable}>Price: </Text>
                    <TextInput style={styles.input} maxLength={20} value={price} onChangeText={
                        (newText) => setPrice(newText)
                    }
                        placeholder={currentPrice.toString()}
                    />
                </View>

                <Button title="Update" color={Colors.primaryColor} onPress={
                    () => {
                        dispatchAction(editProduct(getUpdatedValues(), productId));
                    }
                } />

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 50,
        color: Colors.secondaryColor
    },
    lableContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    lable: {
        fontSize: 18,
        marginHorizontal: 10,
        color: Colors.secondaryColor
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '50%'
    }
});

export default EditProductScreen;