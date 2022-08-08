import React from 'react';
import './Feature.css'
import { BsHexagon } from 'react-icons/bs';
import {FaAccessibleIcon, FaGg} from 'react-icons/fa';


const Feature = ({key, text, icon, heading}) => {
    return (
        <div className='feature' key={key}>
           <div className='feature-icon'>
                <BsHexagon color='red' size={55}  />
                <div className='inner-icon'>
                    {icon}
                </div>
           </div>
           <div className='feature-text'>
               <h3> {heading}</h3>
               <p className='u-text-small'>
                    {text}
               </p>
           </div>
        </div>
    )
}

export default Feature
