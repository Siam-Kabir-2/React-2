import { useState } from "react";

export default function LikeButton() {
    let [isLiked,setIsLiked]=useState(false); //states must me used inside return function...can be use multiple states

    let [click,setClick]=useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        !isLiked?setClick(click+1):setClick(click);
        console.log(isLiked);
    };
  return (

    <div>
      <p onClick={toggleLike}>
        {click}
        {isLiked?<i className="fa-solid fa-heart" style={{color : "red"}}></i>:<i className="fa-regular fa-heart" ></i>}
      </p>
    </div>
  );
}
