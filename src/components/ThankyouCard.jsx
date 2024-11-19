import ThankyouImg from '../images/images/illustration-thank-you.svg'

export const ThankyouCard = ({num}) => {
  return (
    

    <div className='thank-you-card '>
  
        <img src={ThankyouImg} alt="" />
        <small>You selected {num} out of 5</small>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>
  
    </div>
   
    
  )}
  