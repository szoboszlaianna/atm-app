import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import DialPad from './Components/DialPad';

function App() {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState([]);

  const handleSelect = e => {
    setAmount(prev => {
      return prev === '0' ? `${e.target.id}` : `${prev}${e.target.id}`;
    });
  };

  const handleDelete = e => {
    setAmount(prev => {
      return prev === '0' ? `${e.target.id}` : `${prev}${e.target.id}`;
    });
  };

  const coins = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

  const calculateCoins = () => {
    var resultArray = [];
    var total = amount;

    coins.map(c => {
      resultArray.push(Math.floor(total / c));
      total = total % c;
    });

    setResult(resultArray);
  };

  return (
    <div className='App'>
      <input type='number' value={amount}></input>
      <DialPad onSelect={handleSelect} onDelete={handleDelete} />
      <Button onClick={calculateCoins} type='submit'>
        Submit
      </Button>
      <div>{result}</div>
    </div>
  );
}

export default App;
