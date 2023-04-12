import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { buffer } from 'stream/consumers';
import { FaAmazon } from "react-icons/fa";
import ButtonEs6 from './components/ButtonEs6';
import LikeButton from './components/ButtonEs6';

//Button theo định nghĩa Component
// function Button(props: {label: string}){
//   return(
//     <button type='button'>{props.label}</button>
//   )
// }

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
  // const [like, setLike] = useState(Number)
  // const [dislike, setdisLike] = useState(Number)

  // const [likeactive, setlikeactive] = useState(false)
  // const [dislikeactive, setdislikeactive] = useState(false)

  // function likef(){
  //    if(likeactive){
  //     setlikeactive(false)
  //     setLike(like-1)
  //    }
  //    else{
  //     setlikeactive(true)
  //     setLike(like+1)
  //     if(dislikeactive){
  //       setdislikeactive(false)
  //       setLike(like+1)
  //       setdisLike(dislike-1)
  //     }
  //    }
  // }

  return (
    <div className='App'>
      <h1>Phat</h1>
      {/* <button onClick={likef}>Thích {like}</button> */}
      {/* <button onClick={dislikef}>Đã Thích {dislike}</button> */}

      <div>{Link()}</div>
      {/* <ButtonEs6 icon={<FaAmazon/>} label='Add to Cart' colorCustom='buttonRed' />
      <ButtonEs6 icon={undefined} label='Delete'colorCustom='buttonBlack'/> */}
      <LikeButton />
    </div>
  );
}

export default App;
