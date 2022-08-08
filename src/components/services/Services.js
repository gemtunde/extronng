import React, {useEffect} from 'react';
import './Services.css'
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import nftimg from '../../assets/images/05.png'
import Service from './Service';
import {serviceList} from './data'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])

    return (
       <section id='features'>
           <div className='container features'>
                <div className='u-title' data-aos='fade-down'>
                    <BsFillBookmarkStarFill color='green' size={30} />
                    <h2>Services </h2>
                    <p className='u-text-small u-text-dark'>
                    We specializes in rendering professional and innovative services to the oil and gas upstream and down-stream sectors.
                    </p>
                    <p className='u-text-small u-text-dark'>
                        Extron offers an extensive range of professional services designed to meet
                            growing and changing demand of the Oil and gas industries.
                    </p>
                </div>
                <div className='features-content'> 
                        <div className='features-left' data-aos='fade-right'>
                            <img src={nftimg} alt='feature' />
                        </div>
                        <div className='features-right' data-aos='fade-left'>
                          {
                              serviceList.map((feature)=>(
                                <Service
                                    key={feature.id}
                                    icon={feature.icon}
                                    heading={feature.heading}
                                    text={feature.text}
                                />
                              ))
                          } 
                        </div>
                </div>
           </div>
       </section>
    )
}

export default Services
