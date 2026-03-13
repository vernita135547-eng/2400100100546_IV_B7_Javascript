import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Hello React</h1>
    <p>This is my first react Application</p>
  </div>
  )
}

export default App
