// import "./ButtonEs6.css";
import styles from "./ButtonEs6.module.css";
import React, { useState } from "react";

//Button theo ES6
// function ButtonEs6({label, icon, colorCustom} : {colorCustom?: string, label?: string, icon?: React.ReactNode}){
//     return(
//       <button className={`${colorCustom}`} type='button'>{icon ? icon :null} {label}</button>
//     )
// }

// function ButtonEs6({label = 'Button', icon, colorCustom=''}
//  : {colorCustom?: string, label?: string, icon?: React.ReactNode}){
//     return(
//       <button className={`${styles.button}
//        ${styles[colorCustom]}`} 
//        type='button'>{icon ? icon :null} {label}</button>
//     )
// }

const LikeButton = () => {
  const [like, setLike] = useState(Number),
    [disLike, setDisLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (disLike?-1:1));
      setDisLike(!disLike);
    };

  return (
    <div>
      <button
        className={"like-button " + (disLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
    </div>
  );
};

// export default ButtonEs6
export default LikeButton