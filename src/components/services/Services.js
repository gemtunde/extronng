import React, {useEffect} from 'react';
import './Services.css'
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import nftimg from '../../assets/images/4.jpg'
import nftsimg from '../../assets/images/3.jpg'
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
                    <h2>Telecoms Services </h2>
                    <p className='u-text-small u-text-dark'>
                    Since most base stations in Africa are connected Via Wireless Transport media, Suitability of a site for construction is eventually decided by availability of a Point to Point transport network.
                    </p>
                    <p className='u-text-small u-text-dark'>
                    Our engineers are proficient in the use of PATHLOSS for prediction Line Of Sight (LOS) to ensure seamless.
                    </p>
                </div>
                <div className='features-content'> 
                        <div className='features-left' data-aos='fade-right'>
                            <img src={nftimg} alt='feature' />
                            <img src={nftsimg} alt='feature' />
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
