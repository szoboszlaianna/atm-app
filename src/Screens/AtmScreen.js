import React from 'react';
import Button from '../Components/Button';
import DialPad from '../Components/DialPad';
import NumberField from '../Components/NumberField';
import Title from '../Components/Title';
import classes from './AtmScreen.module.css';

const AtmScreen = props => {
  return (
    <>
      <Title>{props.title}</Title>
      <NumberField type='text' value={props.amount > 0 ? `£${props.amount}` : '£'} onChange={props.onInputChange}></NumberField>
      <DialPad className={classes.dial} onSelect={props.onSelect} onDelete={props.onDelete} />
      <Button onClick={props.onClick} type='submit'>
        Submit
      </Button>
    </>
  );
};

export default AtmScreen;
