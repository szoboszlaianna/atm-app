import React, { useState } from 'react';
import classes from './App.module.css';
import AtmScreen from './Screens/AtmScreen';
import DepositingScreen from './Screens/DepositingScreen';
import { coins } from './data';

function App() {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState([]);
  const [submited, setSubmited] = useState(false);

  const handleSelect = e => {
    setAmount(prev => {
      return prev === '0' ? `${e.target.id}` : `${prev}${e.target.id}`;
    });
  };

  const handleDelete = e => {
    setAmount(prev => {
      return prev.slice(0, -1);
    });
  };

  const calculateCoins = () => {
    var resultArray = [];
    var total = amount;

    coins.map(c => {
      resultArray.push(Math.floor(total / c.value));
      total = total % c.value;
    });

    setResult(resultArray);
    setSubmited(true);
  };

  const handleReturn = () => {
    setSubmited(false);
    setAmount('');
  };

  const handleInputChange = e => {
    setAmount(e.target.value);
  };

  return (
    <div className={classes.App}>
      {!submited && <AtmScreen title='Select amount' amount={amount} onSelect={handleSelect} onDelete={handleDelete} onClick={calculateCoins} onInputChange={handleInputChange} />}
      {submited && <DepositingScreen header='Depositing' footer='Thank you for choosing Enalyzer ATM' result={result} coins={coins} amount={amount} onReturn={handleReturn} />}
    </div>
  );
}

export default App;
