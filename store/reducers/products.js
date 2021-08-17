import { PRODUCTS } from "../../data/dummy-data";
import { EDIT_PRODUCT, REMOVE_PRODUCT } from '../actions/products';

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

        case EDIT_PRODUCT: {

            const userProduct = state.userProducts.find((product) => product.productId == action.productId);
            const product = state.allProducts.find((product) => product.productId == action.productId);

            if (action.value.title != '') {
                userProduct.title = action.value.title;
                product.title = action.value.title;
            }
            if (action.value.imageURL != '') {
                userProduct.imageURL = action.value.imageURL;
                product.imageURL = action.value.imageURL;
            }
            if (action.value.description != '') {
                userProduct.description = action.value.description;
                product.description = action.value.description;
            }
            if (action.value.price != '') {
                userProduct.price = action.value.price;
                product.price = action.value.price;
            }

            const userProductIndex = state.userProducts.indexOf(userProduct);
            const productIndex = state.allProducts.indexOf(product);

            const updatedUserProducts = [...state.userProducts];
            const updatedProducts = [...state.allProducts];

            updatedUserProducts.splice(userProductIndex, 1, userProduct);
            updatedProducts.splice(productIndex, 1, product);

            return { ...state, userProducts: updatedUserProducts, allProducts: updatedProducts }
        }

        default: {
            return state;
        }


    }//End of switch block.



    return state;
}

export default productsReducer;