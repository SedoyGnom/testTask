import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sagaGetCurrentRestaurantAc } from "../../redux/actionCreators/restaurantsAC";

function RestaurantCardInfo() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentRestaurant } = useSelector((state) => state.restaurantsReducer)

  useEffect(() => {
    if (currentRestaurant.id !== +id) {
      dispatch(sagaGetCurrentRestaurantAc(id))
    }
  }, [dispatch, currentRestaurant, id])


  return (
    <div>
      {currentRestaurant.id ?
        <div>{currentRestaurant.info}</div>
        :
        <div>No data</div>}
    </div>
  );
}

export default RestaurantCardInfo;
