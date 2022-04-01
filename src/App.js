import './App.css';
import React, { useState} from 'react';
import {SelectSign} from './Service/SelectSign';
import SelectTimeframe from './Service/SelectTimeframe';
import Horoscope from './Service/Horoscope';

function App() {


  const [SelectedSign, setSelectedSign] = useState(null);
  const [SelectedTimeframe, setSelectedTimeframe] = useState(null);

  const restart= () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }
  
  return (
    <div className='App'>
      <h1>The Horoscope App</h1>
      {!SelectedSign && <SelectSign onSignSelected={setSelectedSign} /> }
      {SelectedSign && !SelectedTimeframe &&( <SelectTimeframe onTimeFrameSelected={setSelectedTimeframe}/>) }
      {SelectedSign && SelectedTimeframe && (<Horoscope sign={SelectedSign} timeframe={SelectedTimeframe} />)} 
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default App;
