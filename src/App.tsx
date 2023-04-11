import React from 'react';
import logo from './logo.svg';
import './App.css';
import { buffer } from 'stream/consumers';

function Button(props: {label: string}){
  return(
    <button type='button'>{props.label}</button>
  )
}

function Link(){
  return(
    <a href="">Home</a>
  )
}

function App() {
  return (
    <div className='App'>
      <h1>Phat</h1>
      <Button label='Add to Cart'/>
      <Button label='Delete'/>
    </div>
  );
}

export default App;
