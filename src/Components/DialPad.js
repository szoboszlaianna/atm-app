import React, { useState } from 'react';
import Key from './Key';
import classes from './DialPad.module.css';

const DialPad = props => {
  const [selected, setSelected] = useState();

  const handleSelect = e => {
    setSelected(e.target.id);
    props.onSelect(e);
  };
  return (
    <div className={classes.dialPad}>
      <div className={classes.row}>
        <Key id='1' onClick={handleSelect}>
          1
        </Key>
        <Key id='2' onClick={handleSelect}>
          2
        </Key>
        <Key id='3' onClick={handleSelect}>
          3
        </Key>
      </div>
      <div className={classes.row}>
        <Key id='4' onClick={handleSelect}>
          4
        </Key>
        <Key id='5' onClick={handleSelect}>
          5
        </Key>
        <Key id='6' onClick={handleSelect}>
          6
        </Key>
      </div>
      <div className={classes.row}>
        <Key id='7' onClick={handleSelect}>
          7
        </Key>
        <Key id='8' onClick={handleSelect}>
          8
        </Key>
        <Key id='9' onClick={handleSelect}>
          9
        </Key>
      </div>
      <div className={classes.row}>
        <Key id='back' onClick={handleSelect}>
          <img src='./back_arrow.png' alt='arrow' height='30px' id='back'></img>
        </Key>
        <Key id='0' onClick={handleSelect}>
          0
        </Key>
      </div>
    </div>
  );
};

export default DialPad;
