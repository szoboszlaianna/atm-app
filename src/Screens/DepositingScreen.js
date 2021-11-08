import React from 'react';
import CoinDisplay from '../Components/CoinDisplay';
import NumberField from '../Components/NumberField';
import Title from '../Components/Title';

const DepositingScreen = props => {
  return (
    <>
      <div>
        <img src='./back_arrow.png' alt='arrow' height='30px' id='back'></img>
        <Title>{props.header}</Title>
      </div>
      <NumberField type='text' value={`£${props.amount}`} disabled='true'></NumberField>
      <CoinDisplay result={props.result} coins={props.coins} />
      <Title>{props.footer}</Title>
    </>
  );
};

export default DepositingScreen;
