import { useState } from 'react'

function CounterApp(){
     const [ count, setCount ] =useState(0)

     //functions:increment, decrement, and resest
     function increment(){
        setCount(count+1)
     }

     function decrement(){
        setCount(count-1)
     }

     function reset(){
        setCount(0)
     }

     return (
         <div>
            <h2>Count: { count }</h2>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset}>Reset</button>

            {/*<p>message: </p>*/}
            {count===10 && <p> Limited Exceeded! </p>}
            {count===10 && <p> Sorry! I cann't go down </p>}
         </div>
     )
}
export default CounterApp