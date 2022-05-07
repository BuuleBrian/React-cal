import './App.css';
import { useReducer } from "react";
import { Number } from "./button.js";
import { Operator } from "./Operator.js";
import {  Remove,Cancel,Equals,compute} from "./Functional";
export const Actions={addTo:'add',remove:'remove',operation:'operation',equals:'equals',cancel:'delete'}

 function reducer(state,action){
   switch(action.type){
     case Actions.addTo:
       if(!state.current||state.overwrite){
         return({...state,current:action.payload.item,overwrite:false})
       }else{
         return(
           {...state,current:state.current+action.payload.item}
         )
       }
      case Actions.remove:
        return(
          {...state,current:null,previous:null,operator:null}
        )
      case Actions.operation:
        if(!state.previous){
          return({...state,previous:state.current,current:null,operator:action.payload.item})
        }else if(state.current){
          return ({...state,previous:compute(state),operator:action.payload.item,current:null});
        }else{
          return({...state,operator:action.payload.item})
        }
      case Actions.equals:
        if(state.current===null||state.previous===null||state.operator===null){
          return state
        }
        else{
          return({...state,current:compute(state),previous:null,operator:null,overwrite:true})
        }
      case Actions.cancel:
      
        if((!state.current&&!state.operator)||state.overwrite){
          return {...state,current:null,operator:null,previous:null,overwrite:false};
        }
       if(state.current===null&&state.operator==null){
          return state
        } 
        else if(state.current===null){
          return({...state,operator:null,previous:null,current:state.previous})
        }else if(state.current.length===1){
          return({...state,current:null})
        }else{
          return({...state,current:state.current.slice(1,-1)})
        }
     default:
       return state;
   }
 }

function App() {

  
  const[{previous,operator,current},dispatch]=useReducer(reducer,{})
  return (

      <div className='cal'>
        <div className='output'>
          <div >
          <span className='previous'>{previous}</span>
          <span className='operator'>{operator}</span>
          </div>
           <span className='current'>{current}</span> </div>
           <Number dispatch={dispatch} num='7'/>
           <Number dispatch={dispatch} num='8'/>
           <Number dispatch={dispatch} num='9'/>
        
        <Cancel dispatch={dispatch}/>
        <Number dispatch={dispatch} num='4'/>
        <Number dispatch={dispatch} num='5'/>
        <Number dispatch={dispatch} num='6'/>
        <Operator dispatch={dispatch} operator='/'/>
        <Number dispatch={dispatch} num='3'/>
        <Number dispatch={dispatch} num='2'/>
        <Number dispatch={dispatch} num='1'/>
        <Operator dispatch={dispatch} operator='-'/>
        <Number dispatch={dispatch} num='.'/>
        <Number dispatch={dispatch} num='0'/>
        <Equals dispatch={dispatch}/>
         <Remove dispatch={dispatch}/>
        <Operator dispatch={dispatch} operator='x'/>
        <Operator dispatch={dispatch} operator='+'/>
      </div>
  );
}

export default App;
