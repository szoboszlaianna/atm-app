import React from 'react';
import Button from './Button';
import classes from './Key.module.css';

const Key = props => {
  return (
    <Button type='button' className={classes.key} id={props.id} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default Key;
