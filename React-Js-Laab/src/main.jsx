import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Components/Welcome.jsx'
import Students from './Components/Students.jsx'
import Counter from "./Components/Counter.jsx"
import NameInput from './Components/NameInput.jsx'
import CounterApp from './Components/CounterApp.jsx'
import Subscription from './Components/Subscription.jsx'
import ReportCard from './Components/ReportCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Welcome name = 'Vernita' />
    <Welcome name = 'Vanshika' />
    <Welcome greet= 'Good Morning' />
    <Students name = 'Vernita' rollno='12345' course='Reactjs'/>*/}
    {/*<Counter></Counter>*/}
    {/*<CounterApp></CounterApp>*/}
    {/*<NameInput></NameInput>*/}
    {/*<Subscription></Subscription>*/}
    <ReportCard></ReportCard>
    </StrictMode>
)
