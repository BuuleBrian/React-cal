import { Actions } from "./App.js";
export function Number({dispatch,num}){
    const append=(number)=>{
        dispatch({type:Actions.addTo,payload:{item:number}})
      }
       
    return(
        <button onClick={()=>{append(num)}}>{num}</button>
    )
}
