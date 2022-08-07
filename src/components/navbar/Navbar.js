import React, {useState} from 'react';
import './Navbar.css';
import {AiOutlineBars} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import Button from '../UI/button/Button';
import '../UI/button/Button.css'
import logo from "../../assets/images/logo.png";

function Navbar() {
    const [showMenu, setShowMenu]=useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className='container navbar'>
            <div className='logo'>
                <p className='logo-text'>
                <img src={logo} alt="logo" />
               {/* <span>your NFTs MarketPlace</span> */}
                </p>
            </div>
            <menu>
                <ul className='nav-links' id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}>
                    <li><a href="#"> Home </a> </li>
                    <li><a href="#subscribe"> About </a></li>
                    <li><a href="#features"> Services </a></li>
                    <li><a href="#community"> Model </a></li>
                    <li><a href="#footer"> Contact </a></li>
                    {/* <li className='nav-btn'>
                        <a href="#" className='btn btn-dark'> get Started </a>
                    </li> */}
                    <li className='nav-btn'>
                        <Button 
                        text={'Portfolio'}
                        href={'#faq'}
                        btnClass={'btn-dark'}
                        />
                    </li>
                </ul>
            </menu>
            <div className='menu-icons' onClick={toggleMenu}>
                {
                    showMenu ? <RiCloseLine color='#fff' size={30} /> : 
                    <AiOutlineBars color='#fff' size={27} />
                }
            </div>
         
        </nav>
    )
}

export default Navbar
