import React from 'react';
import classes from './NumberField.module.css';

const NumberField = props => {
  return (
    <>
      <input className={classes.NumberField} value={props.value} type={props.type} disabled={true} aria-label='input' onChange={props.onChange}></input>
    </>
  );
};

export default NumberField;
