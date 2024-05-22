import {
  DELETE_USER_REQUEST,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_REQUEST,
} from "./ActionType";

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      localStorage.setItem("jwt", data.jwt);

    case GET_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, error: null, jwt: action.payload };

    case UPDATE_USER_REQUEST:
    case GET_USER_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };

    case LOGIN_USER_FAILURE:
    case REGISTER_USER_FAILURE:
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        jwt: null,
        user: null,
      };

    case DELETE_USER_REQUEST:
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
        jwt: null,
        user: null,
      };
    default:
      return state;
  }
};
