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
                <h2 data-aos='fade-right'> Procurement Services</h2>
                <form  data-aos='fade-left'>
                    <div className='form-control'>      
                    <p className='u-text-small u-text-light' data-aos='fade-left'>
                        Our vast network of technical partners and manufacturers around the globe makes us capable of supplying our clients with the most comprehensive choice of
                         equipment for their Seismic, Exploration & Production Operations.
                    </p>
                    </div>
                    <div className='form-control'>      
                    <p className='u-text-small u-text-light' data-aos='fade-left'>
                            Furthermore, to complement our Supply Chain Management service, we use the best and latest business management software within our procurement solution, so as to be able to offer all our 
                            clients full implementation and support, focusing on their purchasing needs and requirements.
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
