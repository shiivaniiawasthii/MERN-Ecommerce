import { USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGIN_FAIL,
        USER_LOGOUT,
        USER_SIGNUP_REQUEST,
        USER_SIGNUP_SUCCESS,
        USER_SIGNUP_FAIL
       
 } from "../Constants/userConstant"

export const SignupReducer=()=>{

}

export const userLoginReducer=(state={},action)=>{
        switch(action.type){
                case USER_SIGNUP_REQUEST:
                        return {loading:true}
                case USER_SIGNUP_SUCCESS:
                        return {loading:false,userInfo:action.payload}
                case USER_SIGNUP_FAIL:
                        return {loading:false,error:action.payload}
                        case USER_LOGOUT:
                                console.log("logout")
                                return "hello"
                default:
                        return state
                        }
        }


        export const userRegisterReducer=(state={},action)=>{
                switch(action.type){
                        case USER_LOGIN_REQUEST:
                                return {loading:true}
                        case USER_LOGIN_SUCCESS:
                                return {loading:false,userInfo:action.payload}
                        case USER_LOGIN_FAIL:
                                return {loading:false,error:action.payload}
                                
                        default:
                                return state
                                }
                }