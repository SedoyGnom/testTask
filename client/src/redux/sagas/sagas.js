import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getCurrentRestaurantAc, initRestaurantsAc } from "../actionCreators/restaurantsAC";
import { initUserAc, loginUserAc, logoutUserAc, registerUserAc } from "../actionCreators/userAC";
import { SAGA_GET_CURRENT_RESTAURANT, SAGA_INIT_RESTAURANTS } from "../actionTypes/restaurantsAT";
import { SAGA_INIT_USER, SAGA_LOGIN_USER, SAGA_LOGOUT_USER, SAGA_REGISTER_USER } from "../actionTypes/userAT";


// FUNCTION CONSTRUCTION
export const API = {
  get: (url, params = '', headers = {}) => {
    return fetch(url + params, {
      credentials: 'include',
      method: 'GET',
      headers: { 'Content-Type': 'Application/json', ...headers },
    })
  },
  post: (url, body, headers = {}) => {
    console.log(body);
    return fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'Application/json', ...headers },
      body: JSON.stringify(body),
    })
  }
}

// CALLS FUNCTIONS

// RESTAURANTS

// ALL RESTAURANTS IN STATE
const getRestaurants = async () => {
  try {
    const data = await API.get('http://localhost:4000/restaurants')
    if (!data) return // не понимаю, почему так работает. Иногда при быстрой обнове вообще падает. кладет в state.restaurants undefined
    return await data.json()
  } catch (error) {
    console.log(error);
  }
}
// CURRENT RESTAURANT
const getCurrentRestaurant = async (params) => {
  try {
    const data = await API.get('http://localhost:4000/restaurants/', params)
    if (!data) return
    return await data.json()
  } catch (error) {
    console.log(error);
  }
}

// USER

// INIT 
const initUser = async () => {
  try {
    const data = await API.get('http://localhost:4000/init')
    if (!data) return // не понимаю, почему так работает
    return await data.json()
  } catch (error) {
    console.log(error);
  }
}

// LOGIN
const loginUser = async (payload) => {
  try {
    console.log('до фетча');
    const data = await API.post('http://localhost:4000/login', payload)
    console.log('в функции loginUser', data);
    if (!data) return // не понимаю, почему так работает
    return await data.json()
  } catch (error) {
    console.log(error);
  }
}

// REGISTRATION
const registerUser = async (payload) => {
  try {
    const data = await API.post('http://localhost:4000/registration', payload)
    if (!data) return // не понимаю, почему так работает
    return await data.json()
  } catch (error) {
    console.log(error);
  }
}

// LOGOUT
const logoutUser = async () => {
  try {
    await API.get('http://localhost:4000/logout')
    // if (!data) return // не понимаю, почему так работает
  } catch (error) {
    console.log(error);
  }
}


// SAGAWORKERS

// метод call, эффект take являются блокирущими методами. Это значит, что пока не выполнятся эти методы сага не будет выполнять дальнейшие инструкции в функции/коде. Исправить эту проблему может метод fork. Эффект параллелизма.
// Пример: 

// функция в бизнес-логике

// async function someFunc(someArg) {
//   const request = await fetch(someUrl)
//   const data = await data.json()
//   return data
// }

// 2 функции worker
// export function* getPeople() {
//   const people = yield call(someFunc, someArg)
//   yield put(someAc(people))
// }

// export function* getPlanets() {
//   const planets = yield call(someFunc, someArg)
//   yield put(someAc(people))
// }

// форк, который позволяет делать 2 ассинхронные функции одновременно без стопа.
// export function* workerSaga() {
//   yield fork(getPeople)
//   yield fork(getPlanets)
// }

// ТАКЖЕ существуют методы(эффекты) как join - блокирует вызов. spawn -позоляет не блокировать всю цепочку задач при работе с форк. если в род. задаче произошла ошибка. 
// и эффект select - позволяет получить данные из store редакса. 
// подробнее дока и https://www.youtube.com/watch?v=7Pq-2bBIzXY

// USER

function* sagaWorkerInitUser() {
  try {
    const user = yield call(initUser)
    yield put(initUserAc(user))
  } catch (error) {
    console.log(error);
  }
}

function* sagaWorkerLoginUser(action) {
  try {
    const user = yield call(loginUser, action.payload)
    if (!user) return
    yield put(loginUserAc(user))
  } catch (error) {
    console.log(error);
  }
}

function* sagaWorkerRegisterUser(action) {
  try {
    const user = yield call(registerUser, action.payload)
    yield put(registerUserAc(user))
  } catch (error) {
    console.log(error);
  }
}

function* sagaWorkerLogoutUser() {
  try {
    yield call(logoutUser)
    yield put(logoutUserAc())
  } catch (error) {
    console.log(error);
  }
}

// RESTAURANTS
function* sagaWorkerInitRestaurants() {
  try {
    const restaurants = yield call(getRestaurants)
    yield put(initRestaurantsAc(restaurants))
  } catch (error) {
    console.log(error);
  }
}

function* sagaWorkerGetCurrentRastaurant(action) {
  try {
    console.log(action, 'action в sagaWorkerGetCurrentRastaurant. Должен быть id');
    const restaurant = yield call(getCurrentRestaurant, action.payload)
    yield put(getCurrentRestaurantAc(restaurant))
  } catch (error) {
    console.log(error);
  }
}

// Takeevery будет считывает каждое "упоминание" action вне зависимости была ли выполнена ассинхронная функция или нет
// TakeLatest будет прерывать выполнение ассинхроннй функции, если до ее выполнения она была вызвана повторно. И вызывать ее уже по новому соотвественно
// takeLeading будет игнорировать вызовы асс. функций, до тех пор пока не выполнит первоначальное задание.

export function* sagaWatcherOfRestaurants() {
  yield takeLatest(SAGA_INIT_RESTAURANTS, sagaWorkerInitRestaurants)
  yield takeEvery(SAGA_GET_CURRENT_RESTAURANT, sagaWorkerGetCurrentRastaurant)
}

export function* sagaWatcherOfUser() {
  yield takeLatest(SAGA_INIT_USER, sagaWorkerInitUser)
  yield takeLatest(SAGA_LOGIN_USER, sagaWorkerLoginUser)
  yield takeLatest(SAGA_REGISTER_USER, sagaWorkerRegisterUser)
  yield takeLatest(SAGA_LOGOUT_USER, sagaWorkerLogoutUser)
}

export default function* sagaWatcher() {
  yield all ([sagaWatcherOfRestaurants(), sagaWatcherOfUser()])
}
