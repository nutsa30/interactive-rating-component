import { useState } from 'react'
import StarImg from'../images/images/icon-star.svg'



const RaitingCard = ({setShowResult,num,setNum}) => {
    
    const [raitings,setRaiting]=useState([1,2,3,4,5])

   

  return (
    <> 
      
      <div className="raiting-card">
        <div className='img-div'>
        <img src={StarImg} alt="" />

        </div>


        <h2>How did we do?</h2>
        <p>please let us know how we did with your support request.All feedback is appreciated to help us improve our offering!</p>
        

        <div className="raiting-btns">
            {raitings.map((currNum,index) =>{
                return <button 
                key={currNum}
                 onClick={()=> {
                  if(currNum===num){
                    setNum(null)
                  }else{
                    setNum(currNum)
                  }
                }} className={`raiting-btn ${ num=== currNum ? "selected" : ""}`}>{currNum}</button>
            })}

        
        </div>
    
        <button 
        disabled={num===null}
        onClick={()=>{
          
            setShowResult(true)

          }}
        className={`raiting-submit-btn ${num !== null ? 'raiting-submit-btn-hover' : ''}`}>SUBMIT</button>
    </div>

    

    </>
  )
}

export default RaitingCard