import { GET_CURRENT_RESTAURANT, INIT_RESTAURANTS } from "../actionTypes/restaurantsAT";

export const restaurantsReducer = (state = { restaurants: [], currentRestaurant: {} }, action) => {
  switch (action.type) {
    case INIT_RESTAURANTS:
      return { ...state, restaurants: action.payload }

    case GET_CURRENT_RESTAURANT:
      return { ...state, currentRestaurant: action.payload }

    default:
      return state;
  }
}
