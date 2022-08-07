import React, {useEffect} from 'react'
import Button from '../UI/button/Button'
import './Header.css'
import '../UI/button/Button.css'
import nftImage from '../../assets/images/banner-01.png'
import {BsMouse} from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css'

function Header() {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])
    return (
        <section id='header'>
            <div className='container header'>
                <div className='header-left' data-aos='fade-right'>
                    <h1>
                        <span>Engineering | Telecoms | Project Mgt, Construction</span>
                        <span>...Procurement & Supply of all form of equipment related to oil, manufacturing and other sector of the
                        economy. </span>
                       
                    </h1>
                    <p className='u-text-small u-text-light'>  Rendering quality services not just to satisfy our clients but to be
The best one stop destination for engineering,installation, commissioning. </p>
                         <div className='header-cta'>
                    <Button
                     text={'Our Portfolio'}
                     btnClass={'btn-dark'}
                     href={'#faq'}                     
                     />
                    <Button
                     text={'Our Services'}
                     btnClass={'btn-orange'}
                     href={'#features'}                     
                     />
                </div>
                </div>                

                <div className='header-right' data-aos='fade-left'>
                    <img src={nftImage} alt='nft' />
                </div>
            </div>
            <div className='floating-icon'>
                <a href='#features'>
                    <BsMouse color='#fff' size={25} className='mouse' />
                </a>
            </div>
        </section>
    )
}

export default Header
