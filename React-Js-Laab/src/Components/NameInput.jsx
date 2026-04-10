import { useState } from 'react'

function NameInput(){
    const [ name, setName ] = useState('')

    return (
        <div>
            <input type = 'text' placeholder = 
            'Enter your name' onChange = { (e)=>setName(e.target.value) } />
            <h2>Hello, Namastey! { name } </h2>
        </div>
    )
}
export default NameInput