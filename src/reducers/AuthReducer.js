import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "../actions/types";

const INITIAL_SATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_SATE,
        user: action.payload,
        error: "",
        loading: false
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication Failed.", loading: false };
    case LOGIN_USER:
      return { ...state, loading: true };
    default:
      return state;
  }
};
