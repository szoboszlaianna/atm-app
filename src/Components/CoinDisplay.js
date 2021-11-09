import React from 'react';
import Coin from './Coin';
import classes from './CoinDisplay.module.css';

const CoinDisplay = props => {
  const bills = props.coins.filter(item => {
    return item.type === 'note';
  });
  const bigger_coins = props.coins.filter(item => {
    return item.type === 'coin' && item.diameter > 20;
  });
  const smaller_coins = props.coins.filter(item => {
    return item.type === 'coin' && item.diameter <= 20;
  });

  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.column}>
        {bills.map(bill => (
          <Coin key={bill.value} amount={props.result[bill.id]} value={bill.value} />
        ))}
      </div>
      <div className={classes.column}>
        {bigger_coins.map(coin => (
          <Coin key={coin.value} amount={props.result[coin.id]} value={coin.value} />
        ))}
      </div>
      <div className={classes.column}>
        {smaller_coins.map(coin => (
          <Coin key={coin.value} amount={props.result[coin.id]} value={coin.value} />
        ))}
      </div>
    </div>
  );
};

export default CoinDisplay;
