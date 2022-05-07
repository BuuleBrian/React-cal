import { Actions } from "./App.js";
export function Operator({dispatch,operator}){
    const operation=(sign)=>{
        dispatch({type:Actions.operation,payload:{item:sign}})
      }
    return(
        <button onClick={()=>{operation(operator)}}>{operator}</button>
    )
}