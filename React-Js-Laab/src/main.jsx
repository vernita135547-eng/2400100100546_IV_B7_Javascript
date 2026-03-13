import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Components/Welcome.jsx'
import Students from './Components/Students.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome name = 'Vernita' />
    <Welcome name = 'Vanshika' />
    <Welcome greet= 'Good Morning' />
    <Students name = 'Vernita' rollno='12345' course='Reactjs'/>
    </StrictMode>
)
