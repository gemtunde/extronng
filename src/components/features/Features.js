import React, {useEffect} from 'react';
import './Features.css'
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import nftsimg from '../../assets/images/energy1.png';
import nftsimgs from '../../assets/images/energy2.png';
import sine from '../../assets/images/energy4.jpg';
import Feature from './Feature';
import {featureList} from './data'

import AOS from 'aos';
import 'aos/dist/aos.css'
function Features() {
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
                    <h2> Energy Management services</h2>
                    <p className='u-text-small u-text-dark'>
                    Quantum Energy is a specialist in Secure Power Systems deployment and Maintenance services for Critical Infrastructure, Industries and Institutions such as Manufacturers, Banking, Hospitals, Oil and Gas.
                    </p>
                </div>
                <div className='features-content'> 
                        <div className='features-left' data-aos='fade-right'>
                            <img src={sine} alt='feature' />
                            <img src={nftsimg} alt='feature' />
                            <img src={nftsimgs} alt='feature' />
                           
                        </div>
                        <div className='features-right' data-aos='fade-left'>
                          {
                              featureList.map((feature)=>(
                                <Feature 
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

export default Features
