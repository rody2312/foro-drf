import axios from "axios";
import {
  userLoginFail,
  userLoginRequest,
  userLoginSuccess,
  userLogout,
  userRegisterFail,
  userRegisterRequest,
  userRegisterSuccess,
} from "../redux/userSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userLoginRequest.type });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/users/login/",
      { email: email, password: password },
      config
    );

    dispatch({
      type: userLoginSuccess.type,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userLoginFail.type,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: userRegisterRequest.type });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/users/register/",
      { user_name: username, email: email, password: password },
      config
    );

    dispatch({
      type: userRegisterSuccess.type,
      payload: data,
    });

    dispatch({
      type: userLoginSuccess.type,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userRegisterFail.type,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: userLogout.type})
}
