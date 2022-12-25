import { useDispatch } from "react-redux";
import { sagaLogoutUserAc } from "../../redux/actionCreators/userAC";
import styles from "./Logout.module.css";

function Logout() {

  const dispatch = useDispatch()
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(sagaLogoutUserAc())
  }

  return (
    <a className={styles.link} href="/#" onClick={handleLogout}>Logout</a>
  );
}

export default Logout;
