import styles from './Button.module.css';

import React from 'react';

const Button = props => {
  return (
    <button className={`${styles.button} ${props.className}`} type={props.type || 'button'} onClick={props.onClick} id={props.id}>
      {props.children}
    </button>
  );
};

export default Button;
