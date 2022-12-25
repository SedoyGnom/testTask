import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sagaInitRestaurantsAc } from '../../redux/actionCreators/restaurantsAC';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
// import styles from './RestaurantsList.module.css'

function RestaurantsList() {

  const dispatch = useDispatch()

  const { restaurants } = useSelector((state) => state.restaurantsReducer)


  useEffect(() => {
    dispatch(sagaInitRestaurantsAc())
  }, [dispatch])



  return (
    <div >
      {restaurants.length > 0 ? restaurants.map((el) => <RestaurantCard key={el.id} info={el} />) : <div>No data</div>}
    </div>
  );
}

export default RestaurantsList;
