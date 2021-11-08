import React from 'react';
import classes from './NumberField.module.css';

const NumberField = props => {
  return (
    <>
      <input className={classes.NumberField} value={props.value} type={props.type} disabled={props.disabled}></input>
    </>
  );
};

export default NumberField;
