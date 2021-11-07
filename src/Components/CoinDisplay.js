import React from 'react';
import Coin from './Coin';
import classes from './CoinDisplay.module.css';

const CoinDisplay = props => {
  return (
    <div className={classes.container}>
      {props.result.map((number, index) => (
        <Coin key={index} amount={number} value={props.coins[index].value} />
      ))}
    </div>
  );
};

export default CoinDisplay;
