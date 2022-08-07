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
                        <span>Telecoms | Network Planning | Energy Mgt</span>
                        <span>...delivering  value oriented & cost effective service. </span>
                       
                    </h1>
                    <p className='u-text-small u-text-light'>
                    Vast experience in providing end-to-end IT Telecoms solutions, Integration, network planning, Optimization services and Energy Management.
                    </p>
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
