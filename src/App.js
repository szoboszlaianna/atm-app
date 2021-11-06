import React, { useState } from 'react';
import './App.css';
import DialPad from './Components/DialPad';

function App() {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState([]);

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
      <input type='number' value={amount} onChange={e => setAmount(e.target.value)}></input>
      <DialPad />
      <button onClick={calculateCoins}>Submit</button>
      <div>{result}</div>
    </div>
  );
}

export default App;
