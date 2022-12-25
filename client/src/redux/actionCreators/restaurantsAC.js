import { GET_CURRENT_RESTAURANT, INIT_RESTAURANTS, SAGA_GET_CURRENT_RESTAURANT, SAGA_INIT_RESTAURANTS } from "../actionTypes/restaurantsAT"

export const initRestaurantsAc = (payload) => {
  return {
    type: INIT_RESTAURANTS,
    payload
  }
}
export const getCurrentRestaurantAc = (payload) => {
  return {
    type: GET_CURRENT_RESTAURANT,
    payload
  }
}


// SAGAS

export const sagaInitRestaurantsAc = (payload) => {
  return {
    type: SAGA_INIT_RESTAURANTS,
    payload
  }
}
export const sagaGetCurrentRestaurantAc = (payload) => {
  return {
    type: SAGA_GET_CURRENT_RESTAURANT,
    payload
  }
}
