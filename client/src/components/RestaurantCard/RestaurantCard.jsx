import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './RestaurantCard.module.css'


function RestaurantCard({ info }) {

  console.log(info);

  return (
    <div className={styles.container}>
      <div id={`iconRestaurantCard${info.id}`} >
        <Link to={`/restaurants/${info.id}`}>{info.name}</Link>
        {/* <span>{info.rating}</span> */}
      </div>
    </div>
  );
}

export default memo(RestaurantCard);
