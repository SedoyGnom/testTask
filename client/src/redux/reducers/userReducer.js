import { INIT_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../actionTypes/userAT";


export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, user: action.payload }

    case LOGIN_USER: {
      return { ...state, user: action.payload }
    }

    case REGISTER_USER:
      return { ...state, user: action.payload }

    case LOGOUT_USER: {
      return { ...state, user: null }
    }
    default:
      return state;
  }
}
