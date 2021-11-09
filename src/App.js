import React, { useState } from 'react';
import classes from './App.module.css';
import AtmScreen from './Screens/AtmScreen';
import DepositingScreen from './Screens/DepositingScreen';

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

  const coins = [
    {
      id: 0,
      value: 1000,
      type: 'note',
      diameter: 0,
    },
    {
      id: 1,
      value: 500,
      type: 'note',
      diameter: 0,
    },
    {
      id: 2,
      value: 200,
      type: 'note',
      diameter: 0,
    },
    {
      id: 3,
      value: 100,
      type: 'note',
      diameter: 0,
    },
    {
      id: 4,
      value: 50,
      type: 'note',
      diameter: 0,
    },
    {
      id: 5,
      value: 20,
      type: 'coin',
      diameter: 40,
    },
    {
      id: 6,
      value: 10,
      type: 'coin',
      diameter: 20,
    },
    {
      id: 7,
      value: 5,
      type: 'coin',
      diameter: 50,
    },
    {
      id: 8,
      value: 2,
      type: 'coin',
      diameter: 30,
    },
    {
      id: 9,
      value: 1,
      type: 'coin',
      diameter: 10,
    },
  ];

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
