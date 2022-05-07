import React from 'react'
import { Actions } from './App'

export  function Remove({dispatch}) {
    const remove=()=>{
        dispatch({type:Actions.remove})
      }
    
  return (
    <div>
       <button onClick={remove}>AC</button>
    </div>
  )
}

export  function Equals ({dispatch}) {
    const equals=()=>{
        dispatch({type:Actions.equals})
      }
  return (
    <div>
       <button onClick={equals}>=</button>
    </div>
  )
}

export  function Cancel({dispatch}) {
    const cancel=()=>{
        dispatch({type:Actions.cancel})
      }
    
  return (
    <div>
       <button onClick={cancel}>DEL</button>
    </div>
  )
}
export const compute=(state)=>{
    let prev=parseFloat(state.previous)
    let cur=parseFloat(state.current)
    let computation;
    switch(state.operator){
      case '+':
        computation=prev+cur
        break
      case '-':
        computation=prev-cur
        break
      case '/':
        computation=prev/cur
        break
      case 'x':
        computation=prev*cur
        break
      default:
        return
      
    }
    return computation;
  }
