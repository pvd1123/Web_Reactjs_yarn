import React from 'react';
import logo from './logo.svg';
import './App.css';
import { buffer } from 'stream/consumers';
import { FaAmazon } from "react-icons/fa";
import ButtonEs6 from './components/ButtonEs6';

//Button theo định nghĩa Component
function Button(props: {label: string}){
  return(
    <button type='button'>{props.label}</button>
  )
}

// //Button theo ES6
// function ButtonEs6({label, icon} : {label: string, icon: React.ReactNode}){
//   return(
//     <button type='button'>{icon ? icon :null} {label}</button>
//   )
// }

function Link(){
  return(
    <a href="">Home</a>
  )
}

function App() {
  return (
    <div className='App'>
      <h1>Phat</h1>
      <div>{Link()}</div>
      <ButtonEs6 icon={<FaAmazon/>} label='Add to Cart' colorCustom='buttonRed' />
      <ButtonEs6 icon={undefined} label='Delete'colorCustom='buttonBlack'/>
    </div>
  );
}

export default App;
