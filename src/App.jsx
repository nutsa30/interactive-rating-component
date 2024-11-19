

import { useState } from 'react'
import './App.css'
import RaitingCard from './components/RaitingCard'
import { ThankyouCard } from './components/ThankyouCard'

function App() {
 

    const [showResult,setShowResult]=useState(false)
    const [num,setNum]= useState(null)
 

  return (
    <>
   <div>
    {
     showResult===true ? <ThankyouCard num={num}/>:<RaitingCard  setShowResult={setShowResult}
     num={num} setNum={setNum}/>

    }



    </div>

    </>
  )
}

export default App
