import {
  GET_ALL_REGIMES_FAILURE,
  GET_ALL_REGIMES_REQUEST,
  GET_ALL_REGIMES_SUCCESS,
  GET_CURRENT_REGIME_FAILURE,
  GET_CURRENT_REGIME_REQUEST,
  GET_CURRENT_REGIME_SUCCESS,
  GET_REGIME_FAILURE,
  GET_REGIME_REQUEST,
  GET_REGIME_SUCCESS,
  REGIME_CREATE_FAILURE,
  REGIME_CREATE_REQUEST,
  REGIME_CREATE_SUCCESS,
  REGIME_DELETE_FAILURE,
  REGIME_DELETE_REQUEST,
  REGIME_DELETE_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: null,
  data: null,
  regimeCurrent: null,
  regime: null,
  regimes: [],
  error: null,
};

export const regimeReducers = (state = initialState, action) => {
  switch (action.type) {
    case REGIME_CREATE_REQUEST:
    case REGIME_DELETE_REQUEST:
    case GET_REGIME_REQUEST:
    case GET_CURRENT_REGIME_REQUEST:
    case GET_ALL_REGIMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_REGIME_FULFILLED":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        regime: action.payload.data.regime,
        regimes: action.payload.data.regimes,
      };
    case GET_ALL_REGIMES_FAILURE:
    case GET_CURRENT_REGIME_FAILURE:
    case GET_REGIME_FAILURE:
    case REGIME_DELETE_FAILURE:
    case REGIME_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REGIME_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        regimeCurrent: action.payload,
      };
    case GET_ALL_REGIMES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        regimes: [action.payload],
      };
    case GET_CURRENT_REGIME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        regimeCurrent: action.payload,
      };
    case GET_REGIME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        regime: action.payload,
      };
      case REGIME_DELETE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          regimeCurrent: null,
          regimes : state.regimes.filter(regime => regime._id !== action.payload)
        };
        default:
          return state;
  }
};
{
}
