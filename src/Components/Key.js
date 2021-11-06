import React from 'react';
import classes from './Key.module.css';

const Key = props => {
  return (
    <button type='button' className={classes.key} id={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Key;
