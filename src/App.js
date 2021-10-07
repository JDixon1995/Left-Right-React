import React, {useState} from 'react';
import './App.css';
import History from './History.js'
import Button from './Button.js';

const App = () => {

  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ allClicks, setAll ] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft( left + 1);
  }
  
  const handleRightClick = () => { 
    setAll(allClicks.concat('R'));
    setRight( right + 1);
  }

  return (
    <div className="App">
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
