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
  console.log(bills);
  console.log(bigger_coins);
  console.log(smaller_coins);

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        {bills.map(bill => (
          <Coin key={bill.value} amount={1} value={bill.value} />
        ))}
      </div>
      <div className={classes.column}>
        {bigger_coins.map(coin => (
          <Coin key={coin.value} amount={1} value={coin.value} />
        ))}
      </div>
      <div className={classes.column}>
        {smaller_coins.map(coin => (
          <Coin key={coin.value} amount={1} value={coin.value} />
        ))}
      </div>
    </div>
  );
};

export default CoinDisplay;
