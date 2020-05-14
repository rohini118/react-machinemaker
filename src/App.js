import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClass from './Component/CounterClass';
import HookCounter from './Component/HookCounter';
import HookCounterTwo from './Component/HookCounterTwo';
import HookCounterThree from './Component/HookCounterThree';

function App() {
  return (
    <div className="App">
      <HookCounterThree/>
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
     {/* <CounterClass /> */}
     
    </div>
  );
}

export default App;
