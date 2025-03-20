import { useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);

    function incCount() {
        setCount(count+1);
        // console.log(count); 
    }

    return(
        <>
            <h5>Click to Increment</h5>
            <button onClick={incCount}>Count={count}</button>
        </>
    )

}