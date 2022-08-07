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
                Several factors have contributed to our remarkable successes, but one factor stands out; our unwavering commitment to a set of three core values, which have with passage of time become our watchword- Partnership, Relationship, and Commitment to Excellence..</p>
                <p className='u-text-small u-text-light' data-aos='fade-left'>
                With our of qualified and seasoned proffessionals who have several years of experience, we guarantee quality and
                 safe service delivery at all times, through out our operation, our exemplary safety is world class.               
                </p>
               
            <IconContext.Provider value={{size:'15'}}>
                <div className='community-icons' data-aos='fade-up'>
                     <div className='community-icon'>
                            <GrAndroid /> <p> info@quantum-basics.com</p>
                    </div>
                   
                </div>
             </IconContext.Provider>
            </div>
        </section>
    )
}

export default Download
