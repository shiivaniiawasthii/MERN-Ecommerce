import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_FAIL, USER_SIGNUP_SUCCESS } from "../../Constants/userConstant"
import axios from "axios"
export const login =(email,password)=>async(dispatch)=>{
 try{
        dispatch({type:USER_LOGIN_REQUEST})

        const config ={
                headers:{
                        'Content-Type':'application/json'
                }
        }
        const {data}= await axios.post(`http://localhost:5000/api/users/login`,{email,password},config)


        dispatch({type:USER_LOGIN_SUCCESS,
                   payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

       

 }catch(error){

        dispatch({type:USER_LOGIN_FAIL,
                        payload:error.response &&error.response.data.message?
                        error.response.data.message:error.message
        })

 }
}



export const register =(name,email,password)=>async(dispatch)=>{
        console.log(name,email,password,36)
        try{
               dispatch({type:USER_LOGIN_REQUEST})
       
               const config ={
                       headers:{
                               'Content-Type':'application/json'
                       }
               }
               const {data}= await axios.post(`http://localhost:5000/api/users/`,{name,email,password},config)
       
       
               dispatch({type:USER_SIGNUP_SUCCESS,
                          payload:data
                          
               })
               dispatch({type:USER_LOGIN_SUCCESS,
                payload:data})
       
               localStorage.setItem('userInfo',JSON.stringify(data))
       
              
       
        }catch(error){
       
               dispatch({type:USER_SIGNUP_FAIL,
                               payload:error.response &&error.response.data.message?
                               error.response.data.message:error.message
               })
       
        }
       }

export const logout=()=>(dispatch)=>{
  localStorage.removeItem(`userInfo`)
  console.log(35)
  dispatch({type:USER_LOGOUT})
  console.log(37)
}