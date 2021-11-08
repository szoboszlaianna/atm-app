import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import CoinDisplay from './Components/CoinDisplay';
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
          <CoinDisplay result={result} coins={coins} />
        </>
      )}
    </div>
  );
}

export default App;
