import React,{useEffect} from 'react';
import './Subscribe.css'
import {TiSocialGooglePlus} from 'react-icons/ti'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Subscribe() {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])
    return (
        <section id='subscribe'>
            <div className='container subscribe'>
                <h2 data-aos='fade-right'>Asset Management and Equipment Leasing</h2>
                <form  data-aos='fade-left'>
                    <div className='form-control'>      
                    <p className='u-text-small u-text-light' data-aos='fade-left'>
                    Asset Mapping - Mapping with built-in Geospatial Information System (GIS) that has Meter-to transformer mapping function, our solution will help utility distribution companies control, monitor and manage both remotely dispersed and local assets real-time.
                   </p>
                    </div>
                    <div className='form-control'>      
                    <p className='u-text-small u-text-light' data-aos='fade-left'>
                    Equipment Leasing -We have a variety of wireless network testing equipments (both software and hardware) that are technically useful and economically beneficial for your use via lease in order to meet up with project demands and deadlines to enhance customer satisfaction.
                   </p>
                    </div>
                </form>
                <h2 data-aos='fade-right'></h2>
                {/* <form  data-aos='fade-left'>
                    <div className='form-control'>
                        <input type='text' placeholder='Enter your email for latest updates...' />
                    <button>Subscribe</button>
                    </div>
                </form> */}
                <div className='social-icons'>
                    <div className='social-icon'  data-aos='fade-up'>
                        <TiSocialGooglePlus />
                    </div>
                    <div className='social-icon'  data-aos='fade-down'>
                        <FaFacebook />
                    </div>
                    <div className='social-icon'  data-aos='fade-up'>
                        <FaTwitter />
                    </div>
                    <div className='social-icon'  data-aos='fade-down'>
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
