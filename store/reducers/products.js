import { PRODUCTS } from "../../data/dummy-data";
import { REMOVE_PRODUCT } from '../actions/products';

const initialState = {
    allProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((product) => product.userId == 'u1')
}

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case REMOVE_PRODUCT: {
            const updatedUserProducts = state.userProducts.filter((product) => product.productId != action.id);
            return { ...state, userProducts: updatedUserProducts }
        }
    }

    return state;
}

export default productsReducer;