import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_EDIT_FAIL,
    USER_EDIT_RESET,
    USER_SOLO_REQUEST,
    USER_SOLO_SUCCESS,
    USER_SOLO_FAIL,
    USER_SOLO_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
  } from "../constants/userConstants";

  import axios from "axios";
import { userLoginFail, userLoginRequest, userLoginSuccess } from "../redux/userSlice";


  export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: userLoginRequest.type})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(
            'http://127.0.0.1:8000/users/login/',
            {'email':email, 'password': password}, config
        )

        dispatch({
            type: userLoginSuccess.type,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: userLoginFail.type,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
  }