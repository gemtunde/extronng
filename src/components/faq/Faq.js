import React, {useEffect} from 'react';
import {MdOutlineLibraryBooks} from 'react-icons/md';
import Question from './Question';
import {questions} from './data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import audits from '../../assets/images/01.png';
import audit from '../../assets/images/03.png';
import audi from '../../assets/images/04.png';
import './Faq.css';

function Faq() {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])
    return (
        <section id='faq'>
        <div className='container faq'>
             <div className='u-title'  data-aos='fade-down'>
                 <MdOutlineLibraryBooks color='green' size={30} />
                 <h2> Projects</h2>               
 
                 <p className='u-text-small u-text-dark'>
                  Our staffs have proven experience and capability on projects ranging from offshore to onshore installation and 
                  commissioning. Some of the project executed in the past are:
                   </p>
                   <h2></h2>
                 <p className='u-text-small u-text-dark'>
                    <ul>
                        <li>NIGERIAN LIQUIFIED NATURAL GAS PROJECT (NLNG) TRAIN 3 AND 5</li>
                        <li>SOKU DEBOTTLE-NECKING PROJECT FOR SPDC (SHELL).</li>
                        <li>OKOLOMA FLOWLINES AND PIPELINE PROJECT.</li>
                        <li>CHEVRON ESCRAVOS OFFSHORE PLATFORMS REHABILITATION.</li>
                        <li>NIGERIAN AGIP OIL COMPANY OBOB GAS PLANT UPGRADING.</li>
                        <li>ALAKIRI GAS PLANT REHABILITATION PROJECT (SPDC)</li>
                        <li>ELECTRICAL/INSTRUMENTATION PROJECT ON RIG/PRODUCTION PLATFORMS
                        (MOBIL).</li>
                        <li>DEVELOPED PROJECT MANAGEMENT SCHEDULE/PLAN FOR THE SECURITY
                        UPGRADE PROJECT(MOBIL).</li>

                    </ul>
                  </p>
             </div>
             <div className='feat-left'>
                     <img src={audit} alt='feature' />
                     <img src={audi} alt='feature' />
                     <img src={audits} alt='feature' />
             </div>                    
        </div>
        {/* <div  className='questions'  data-aos='fade-up'>
        <h2> Portfolio - The projects we have done</h2>
           {
               questions.map((question)=>(

                   <Question
                   key={question.id}
                   title = {question.title}
                   answer = {question.answer}                  
                   />
               ))
           }
        </div> */}
        </section>
    )
}

export default Faq
