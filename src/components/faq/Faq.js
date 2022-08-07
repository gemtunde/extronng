import React, {useEffect} from 'react';
import {MdOutlineLibraryBooks} from 'react-icons/md';
import Question from './Question';
import {questions} from './data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import audits from '../../assets/images/audits.jpg';

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
                 <h2> Electrical Audits</h2>
                 <p className='u-text-small u-text-dark'>
                 We understand that the inspection and testing in all establishments should be carried out with strict adherence to customer comfort, best international practices, and in a way that does not disrupt operations, hence we use a non-contact, and non-intrusive test equipment to carry out our tests. 
                  </p>
 
                 <p className='u-text-small u-text-dark'>
               Our staffs have proven experience and capability on projects ranging from offshore to onshore installation 
 and commissioning.                   </p>
                 <p className='u-text-small u-text-dark'>
                 Our testing processes do not require pulling down or pulling out any part of the system, and are equipped with infrared thermography technology.
                     </p>
             </div>
                     <img src={audits} alt='feature' />
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
