import './App.css';
import imgLogo from './images/calculator.svg';
import Button from './components/button.js'
import ScreenShow from './components/screen.js';
import ClearButton from './components/clearButton.js';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  /*
  useState its  a tool that allow to set the state  of a variable, in this case
  input is the variable and setInput its a function that change the variable, input is initialized with ('')*/
  /*destructuring */
  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };  
  const calculateResult=()=>{
    if(input){  //if the input its a string empty, the function not will work 
      setInput(evaluate(input));
    }else{
      alert("please enter an operation");
    }    
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          src={imgLogo}
          className="logo-img"
          alt='logo-image' />
      </div>
      <div
        className='calculator-container'>
        <ScreenShow
          input={input}>
        </ScreenShow>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button></div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={()=>setInput('')}>
            AC
            </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
