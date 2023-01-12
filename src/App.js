import React, { useState } from "react";
import "./App.css"
import{BsPlayFill,BsPauseFill} from "react-icons/bs"
import{BiRefresh} from "react-icons/bi"
import Length from "./Length";

const App = () => {
  const [displayTime, setDisplayTime] = useState(25*60)
  const [play, setPlay] = useState(false)

  const playTime = setTimeout(() =>{
    if(displayTime && play){
      setDisplayTime(displayTime - 1)
      setPlay(!play)
    }
  }, 1000)
  const handelPlay = () =>{
    clearTimeout(playTime)
    setPlay(!play)
  }

  const timeFormat = (time) =>{
    let minute = Math.floor(time / 60)
    let second = time % 60
    let tminute = minute < 10 ? "0" + minute : minute
    let tsecond = second < 10 ? "0" + second : second 
    return `${tminute}:${tsecond}`
  }
  return (
    <div>
      <div id="container">
        <div id="app">
            <h1 class="main-title">25 + 5 Clock</h1>
            <div className="conterol-flex">
              <Length set={setDisplayTime}
                      diplay={displayTime}/>
            </div>
            <div className="timer">
                <h3>Session</h3>
                <h1>{timeFormat(displayTime)}</h1>
            </div>
            <div>
              <BsPlayFill className='icons' onClick={handelPlay}/><BsPauseFill className='icons' /><BiRefresh className='icons' />
            </div>
            <div class="author"> Designed and Coded by <br/>
              <a href="https://goo.gl/6NNLMG" target="_blank" rel="noreferrer">Peter Weinberg</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
