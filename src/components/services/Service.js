import React from 'react';
import './Service.css'
import { BsHexagon } from 'react-icons/bs';
import {FaAccessibleIcon, FaGg} from 'react-icons/fa';


const Service = ({key, text, icon, heading}) => {
    return (
        <div className='feature' key={key}>
           <div className='feature-icon'>
                <BsHexagon color='green' size={55}  />
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

export default Service
