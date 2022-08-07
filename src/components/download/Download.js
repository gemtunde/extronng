import React,{useEffect} from 'react'
import {FaApple, FaWindows} from 'react-icons/fa';
import {GrAndroid} from 'react-icons/gr';
import {IconContext} from 'react-icons';
import './Download.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Download() {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])
    return (
        <section id='community'>
            <div className='container community'>
                <h2 data-aos='fade-down'>OUR Business MODEL </h2>
                <p className='u-text-small u-text-light' data-aos='fade-right'>
                Our Business Model Supports Your Project Objectives, Timeline And Budget, Adding Value Through Experience, Expertise And Relationships    </p>
                <p className='u-text-small u-text-light' data-aos='fade-left'>
               With our of qualified and seasoned professionals who have several years of experience in the oil and gas industry, we guarantee quality
                and safe service delivery at all times.throughout our operation,
                 our exemplary safety is world class.  </p>
               
            <IconContext.Provider value={{size:'15'}}>
                <div className='community-icons' data-aos='fade-up'>
                     <div className='community-icon'>
                            <GrAndroid /> <p> info@extronng.com</p>
                    </div>
                   
                </div>
             </IconContext.Provider>
            </div>
        </section>
    )
}

export default Download
