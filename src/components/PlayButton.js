import React from 'react'
import './PlayButton.css'
import { useState } from 'react';

export default function PlayButton({message,children,onPlay,onPause}) {
  // const [play,setPlay]=useState("Play");
    const [playing,setPlaying]=useState(false);
    function handleClick(e){
        console.log(e);
        e.stopPropagation();
        if(playing) onPause();
        else onPlay();
        setPlaying(!playing);
    }
  return (
    <button onClick={handleClick}>{playing?'Pause':'Play'} {playing?'⏸':'▶'}</button>
  )
}
