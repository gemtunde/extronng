import React,{useState, useEffect} from 'react';
import './Question.css';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const Question = ({ title, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    
    const toggle = () => {
        setShowAnswer(!showAnswer)
    }
    return (
        <div className='container question' >
           <div className='question-title'>
               <h4>{title}</h4>
               <button className='question-icon' onClick={toggle}> 
               {showAnswer ? <AiOutlineMinus color='red'/> : <AiOutlinePlus color='green' />}
               </button>
           </div>
           <div className='question-answer'>             
             {showAnswer && <p className='u-text-small'>{answer}</p>
          }
                 </div>
        </div>
    )
}

export default Question
