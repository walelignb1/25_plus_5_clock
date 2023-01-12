import React,{useState} from 'react'
import{FaArrowDown, FaArrowUp} from "react-icons/fa"

const Length = () => {
  const [displayTime, setDisplayTime] = useState(25*60)
  const [breakTime, setBreakTime] = useState(5)
  const [sessionTime, setSessionTime] = useState(25)
  
    const breakDecrease = () =>{
    if(breakTime > 1){
      setBreakTime(breakTime - 1)
    }
  }
    const breakIncrease = () =>{
    if(breakTime < 60){
      setBreakTime(breakTime + 1)
    }
  }

    const sessionDecrease = () =>{
    if(sessionTime > 1){
      setSessionTime(sessionTime - 1)
      setDisplayTime(displayTime - 60)
    }
  }
    const sessionIncrease = () =>{
    if(sessionTime < 60){
      setSessionTime(sessionTime + 1)
      setDisplayTime(displayTime + 60)
    }
  }

  return (
    <div className='length-control'>
        <div>
        <h3>Break Length</h3>
        <FaArrowDown onClick={breakDecrease} className='icons'/>
        <h3>{breakTime}</h3>
        <FaArrowUp onClick={breakIncrease} className='icons'/></div>
        <div>
        <h3>Session Length</h3>
        <FaArrowDown onClick={sessionDecrease} className='icons'/>
        <h3>{sessionTime}</h3>
        <FaArrowUp onClick={sessionIncrease} className='icons'/></div>
    </div>
  )
}

export default Length
