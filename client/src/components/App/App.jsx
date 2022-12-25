import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../Error404/Error404';
import Login from '../Login/Login';
import NavBar from '../NavBar/NavBar';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Home from "../Home/Home";
import Info from '../Info/Info';
import RestaurantCardInfo from '../RestaurantCardInfo/RestaurantCardInfo';
import { Provider } from 'react-redux'
import { store } from '../../redux/store';
import Registration from '../Registration/Registration';
import Session from '../Session/Session';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.backgroundMainImg}>
      <Provider store={store}>
        <BrowserRouter>
          <Session />
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/restaurants' element={<RestaurantsList />} />
              <Route path='/restaurants/:id' element={<RestaurantCardInfo />} />
              <Route path='/login' element={<Login />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/info' element={<Info />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
