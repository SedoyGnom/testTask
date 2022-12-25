import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sagaInitUserAc } from "../../redux/actionCreators/userAC";

function Session() {

  const dipatch = useDispatch()

  useEffect(() => {
    dipatch(sagaInitUserAc())
  }, [dipatch])

  return (
    <></>
  );
}

export default Session;
