import React from 'react';
import classes from './Coin.module.css';

const Coin = props => {
  return (
    <div className={classes.coin}>
      <img className={props.value > 20 ? classes.bill : classes.coin_image} src={props.value > 20 ? '../../500_bill_1_.png' : '../../circle-48.png'} alt='coin_and_bill'></img>
      <div>
        {props.amount} x {props.value}
      </div>
    </div>
  );
};

export default Coin;
