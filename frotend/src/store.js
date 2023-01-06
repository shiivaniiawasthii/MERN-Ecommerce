import {legacy_createStore, combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productListReducer,productDetailsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/CartReducer";

const reducer = combineReducers({
       productList: productListReducer,
       productDetails: productDetailsReducer,
       cart:cartReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems')
?JSON.parse(localStorage.getItem('cartItems')):[]

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
?JSON.parse(localStorage.getItem('shippingAddress')):{}

const PaymentMethodFromStorage = localStorage.getItem('paymentMethod')
?JSON.parse(localStorage.getItem('paymentMethod')):{}


const initialState ={
       cart:{cartItems:cartItemsFromStorage,
              shippingAddress:shippingAddressFromStorage,
              paymentMethod:PaymentMethodFromStorage
              }
}

const middleware = [thunk]

const store = legacy_createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
        
        )

        export default store