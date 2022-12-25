import { INIT_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, SAGA_INIT_USER, SAGA_LOGIN_USER, SAGA_LOGOUT_USER, SAGA_REGISTER_USER } from "../actionTypes/userAT"

export const initUserAc = (payload) => {
  return {
    type: INIT_USER,
    payload
  }
}
export const loginUserAc = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  }
}
export const registerUserAc = (payload) => {
  return {
    type: REGISTER_USER,
    payload
  }
}
export const logoutUserAc = (payload) => {
  return {
    type: LOGOUT_USER,
    payload
  }
}

// SAGA
export const sagaInitUserAc = (payload) => {
  return {
    type: SAGA_INIT_USER,
    payload
  }
}
export const sagaLoginUserAc = (payload) => {
  return {
    type: SAGA_LOGIN_USER,
    payload
  }
}
export const sagaRegisterUserAc = (payload) => {
  return {
    type: SAGA_REGISTER_USER,
    payload
  }
}
export const sagaLogoutUserAc = (payload) => {
  return {
    type: SAGA_LOGOUT_USER,
    payload
  }
}
