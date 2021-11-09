import React from 'react';
import Button from '../Components/Button';
import DialPad from '../Components/DialPad';
import NumberField from '../Components/NumberField';
import Title from '../Components/Title';

const AtmScreen = props => {
  return (
    <>
      <Title>{props.title}</Title>
      <NumberField type='text' value={props.amount > 0 ? `£${props.amount}` : '£'} onChange={props.onInputChange}></NumberField>
      <DialPad onSelect={props.onSelect} onDelete={props.onDelete} />
      <Button onClick={props.onClick} type='submit'>
        Submit
      </Button>
    </>
  );
};

export default AtmScreen;
