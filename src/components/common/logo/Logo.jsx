import React from 'react';
import { IMAGES } from '../../../assets/images/index';
import styles from './logo.scss';

export const Logo = (props) => {
  const {
    height,
  } = props;
  return (
    <div
      className={styles.logo}
      style={{
        height,
      }}
    >
      <img
        src={IMAGES.logo}
        alt="MyBurger"
      />
    </div>
  );
};
