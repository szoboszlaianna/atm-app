import React from 'react';
import Key from '../Components/Key';
import CoinDisplay from '../Components/CoinDisplay';
import NumberField from '../Components/NumberField';
import Title from '../Components/Title';
import classes from './DepositingScreen.module.css';

const DepositingScreen = props => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.returnContainer}>
          <Key id='return' className={classes.return} onClick={props.onReturn}>
            <img src='./back_arrow.png' alt='return' height='100%'></img>
          </Key>
        </div>
        <div className={classes.titleContainer}>
          <Title className={classes.header}>{props.header}</Title>
        </div>
        <div className={classes.emptyContainer}></div>
      </div>
      <NumberField type='text' value={`£${props.amount}`} disabled='true'></NumberField>
      <CoinDisplay result={props.result} coins={props.coins} />
      <Title>{props.footer}</Title>
    </>
  );
};

export default DepositingScreen;
