import axios from "axios";
import { CART_ADD_ITEM } from "../../Constants/cartConstants";
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