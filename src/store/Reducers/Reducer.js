import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_FILTER,
  CLEAR_FILTER,
  SET_MULTIPLE_FILTER,
} from "../Actions/Actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
  filter: "",
  multiplefilter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: "",
      };
      case SET_MULTIPLE_FILTER:
      return {
        ...state,
        multiplefilter: action.multiplefilter,
      };

    default:
      return state;
  }
};

export default reducer;
