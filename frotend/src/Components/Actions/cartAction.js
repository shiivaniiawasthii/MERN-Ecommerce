import axios from "axios";
import { CART_ADD_ITEM ,CART_REMOVE_ITEM,CART_SAVE_SHIPPING_ADDRESS
,CART_SAVE_PAYMENT_METHOD} from "../../Constants/cartConstants";
 export const addToCart =(id,qty)=>async(dispatch,getState)=>{
        // console.log(id,qty,"cartaction-id,qty")
        const {data} = await axios.get(`http://localhost:5000/api/products/${id}`)
         console.log(data,"data-ca")
        dispatch({
                type:CART_ADD_ITEM,
                payload:{
                        product:data._id,
                        name:data.name,
                        image:data.image,
                        price:data.price,
                        countInStock:data.countInStock,
                        qty
                }
        })

        localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
 }


 export const removeToCart =(id)=>async(dispatch,getState)=>{
       
        dispatch({
                type:CART_REMOVE_ITEM,
                payload:id,
        })

        localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
 }

 export const saveShippingAddress =(data)=>(dispatch)=>{
       console.log(data,"cartREducer")
        dispatch({
                type:CART_SAVE_SHIPPING_ADDRESS,
                payload:data,
        })

        localStorage.setItem('shippingAddress',JSON.stringify(data))
 }

 export const savePaymentMethod=(data)=>(dispatch)=>{
    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data,
    })
    localStorage.setItem('paymentMethod',JSON.stringify(data))
 }