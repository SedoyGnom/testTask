import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import styles from './NavBar.module.css'
import HomeIcon from "../common/icons/homeIcon";

function NavBar() {

  const { user } = useSelector((state) => state.userReducer)

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={`${styles.link} ${styles.home}`} to='/'>
          <div className={styles.logo}>
            <HomeIcon /> Home
          </div>
        </Link>
        <Link className={styles.link} to="/restaurants">Restaurants</Link>
        <Link className={styles.link} to="/info">About</Link>
        {
          user ?
            <>
              <Logout />
            </>
            :
            <>
              <Link className={styles.link} to="/login">Login</Link>
              <Link className={styles.link} to="/registration">Registration</Link>
            </>
        }

      </div >
    </div >
  );
}

export default NavBar;
