import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

    <div 
    className='Maindiv'
    style={{backgroundColor:color}}>

    <div className='Flex'>

    <div className='button' onClick={()=>{setColor("Red")}}>Red</div>
    <div className='button' onClick={()=>{setColor("Green")}}>Green</div>
    <div className='button' onClick={()=>{setColor("Blue")}}>Blue</div>
    <div className='button' onClick={()=>{setColor("Orange")}}>Organge</div>
    <div className='button' onClick={()=>{setColor("Purple")}}>Purple</div>

    </div>

    </div>
  )
}

export default App
