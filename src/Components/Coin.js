import React from 'react';
import classes from './Coin.module.css';

const Coin = props => {
  return (
    <div className={classes.coin}>
      <img className={classes.img} src={props.value > 20 ? '../../500_bill_1_.png' : '../../circle-48.png'} alt='coin_and_bill'></img>
      <div>
        {props.amount} X {props.value}
      </div>
    </div>
  );
};

export default Coin;
