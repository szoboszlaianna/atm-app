import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import DialPad from './Components/DialPad';
import NumberField from './Components/NumberField';
import Title from './Components/Title';

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
      prev.slice(0, -1);
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
    setSubmited(true);
  };

  return (
    <div className='App'>
      {!submited && (
        <>
          <Title>Select amount</Title>
          <NumberField type='text' value={amount}></NumberField>
          <DialPad onSelect={handleSelect} onDelete={handleDelete} />
          <Button onClick={calculateCoins} type='submit'>
            Submit
          </Button>
        </>
      )}
      {submited && (
        <>
          <Title>Depositing</Title>
          <NumberField type='text' value={amount} disabled='true'></NumberField>
          <div>{result}</div>
        </>
      )}
    </div>
  );
}

export default App;
