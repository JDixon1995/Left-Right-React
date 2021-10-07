import React, {useState} from 'react';
import './App.css';
import History from './History.js'

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
      <button onClick={ () => handleLeftClick()}> 
        left
      </button>
      <button onClick={ () => handleRightClick()}> 
        right
      </button>
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
