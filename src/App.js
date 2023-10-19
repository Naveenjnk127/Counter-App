import { Component, useState } from "react";
import React from "react";
import "./App.css";

export default function App(){
  const [count,setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1)
  }

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="btn">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

