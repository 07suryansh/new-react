import React from 'react'
import { useState } from 'react';

export default function Counter() {
    // let num=0;
    const [num,setNum]=useState(0);
    function handleclick(){
        setNum(num=>num+1);
    }
  return (
    <div>
    <h1 style={{color:"white"}}>{num}</h1>
    <button onClick={handleclick}>Press Me</button>
    </div>
  )
}
