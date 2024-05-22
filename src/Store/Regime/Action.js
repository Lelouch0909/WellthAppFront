import { api } from "../../Config/api";
import {
  GET_ALL_REGIMES_FAILURE,
  GET_ALL_REGIMES_REQUEST,
  GET_CURRENT_REGIME_FAILURE,
  GET_CURRENT_REGIME_SUCCESS,
  GET_REGIME_FAILURE,
  GET_REGIME_SUCCESS,
  REGIME_CREATE_FAILURE,
  REGIME_DELETE_FAILURE,
  REGIME_DELETE_SUCCESS,
} from "./ActionType";

export const getAllUserRegimes = (idUser) => async (dispatch) => {
  try {
    const { data } = await api.get("/regimes/findall/" + idUser);
    console.log("get all regime of user = " + data);
    dispatch({ type: GET_ALL_REGIMES_REQUEST, payload: data });
  } catch (error) {
    console.log("error :" + error);
    dispatch({ type: GET_ALL_REGIMES_FAILURE, payload: error.message });
  }
};

export const getCurrentUserRegime = (idUser) => async (dispatch) => {
  try {
    const { data } = await api.get("/regimes/findcurrent/" + idUser);
    console.log("get current regime of user = " + data);
    dispatch({ type: GET_CURRENT_REGIME_SUCCESS, payload: data });
  } catch (error) {
    console.log("error :" + error);
    dispatch({ type: GET_CURRENT_REGIME_FAILURE, payload: error.message });
  }
};

export const getByIdRegime = (idRegime) => async (dispatch) => {
  try {
    const { data } = await api.get("/regimes/find/" + idRegime);
    console.log("get  regime of user = " + data);
    dispatch({ type: GET_REGIME_SUCCESS, payload: data });
  } catch (error) {
    console.log("error :" + error);
    dispatch({ type: GET_REGIME_FAILURE, payload: error.message });
  }
};

export const createRegime = (regimeData) => async (dispatch) => {
  try {
    const { data } = await api.post("/regimes/create", regimeData);
    console.log(" created Regime " + data);
    dispatch({ type: REGIME_CREATE_SUCCESS, payload: data });
  } catch (error) {
    console.log("error :" + error);
    dispatch({ type: REGIME_CREATE_FAILURE, payload: error.message });
  }
};


export const deleteRegime = (idRegime) => async (dispatch) => {
  try {
    const { data } = await api.delete("/regimes/delete/" + idRegime);
    console.log(" deleted Regime " + data);
    dispatch({ type: REGIME_DELETE_SUCCESS, payload: data });
  } catch (error) {
    console.log("error :" + error);
    dispatch({ type: REGIME_DELETE_FAILURE, payload: error.message });
  }
};