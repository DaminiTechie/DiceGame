import React, { useState } from 'react'


import './App.css'
import Home from './component/Home/Home';
import GamePlay from './component/GamePlay';

function App() {

    const[isGameStarted, setIsGameStarted] = useState(false);

    const toggleGamePlay = () => {
      setIsGameStarted((prev) => !prev);
    };
  return (
    <>
    {
      isGameStarted ? <GamePlay /> : <Home 
      toggle = {toggleGamePlay}
      />
    }
      
    </>
  );
}

export default App;
