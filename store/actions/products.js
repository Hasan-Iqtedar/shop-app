export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id: id
    }
}

export const editProduct = (values, productId) => {
    return{
        type: EDIT_PRODUCT,
        value: values,
        productId: productId  
    }
}