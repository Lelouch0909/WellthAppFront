import axios from "axios";
import {
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
} from "./ActionType";
import { API_BASE_URL, api } from "../../Config/api";

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await axios.post(API_BASE_URL + "/auth/signin", loginData);
    console.log("loginIN", data.jwt);

    if (data.jwt !== undefined && data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt });
    } else {
      throw new Error("impossible de loger cet utilisateur");
    }
  } catch (error) {
    console.log("erreur signin " + error);
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      API_BASE_URL + "/auth/signup",
      registerData
    );

    if (data.jwt !== undefined && data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.jwt });
    } else {
      throw new Error("impossible de loger cet utilisateur");
    }
  } catch (error) {
    let mes = error.response.data.message
    console.log("erreur signup", mes );

    dispatch({ type: REGISTER_USER_FAILURE, payload: mes });
  }
};

export const getUserProfile = (jwt) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      API_BASE_URL + "/api/utilisateurs/find/"+jwt,
      {
        headers: {
          Authorization: `${jwt}`,
        },
      }
    );
    console.log(data);

    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
};

export const updateUserProfile = (reqData) => async (dispatch) => {
  try {
    const { data } = await api.put("/utilisateurs/update",
      reqData
    );
    console.log("updated user :" + data);

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
  }
};

export const deleteUserProfile = (idUser) => async (dispatch) => {
  try {
    const { data } = await api.delete("/utilisateurs/delete/" + idUser
    );
    console.log("deleted user :" + data);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
  }
};
