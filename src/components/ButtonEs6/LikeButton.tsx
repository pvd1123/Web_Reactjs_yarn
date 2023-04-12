import React, { useState } from "react";
import styles from "./ButtonEs6.module.css";

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
export default LikeButton