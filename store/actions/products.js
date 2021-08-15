export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id: id
    }
}