import React from 'react'

import Button from './Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import './Banner.css';

import bannerImage from '../Image/food.jpg'
import logo from '../Image/logo.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerImage})`}} className='mx-auto  h-56 w-4/5 p-4 border-4
         rounded-md  my-5 flex justify-between bg-no-repeat shadow-lg'>
            <div className='my-32 mx-8'> 
                 <img className="h-16 w-16 rounded-full border-4" src={logo} alt="Prince Logo"/>
            </div>
            <div className='my-auto mx-auto'> 
                <label className="flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md
                       tracking-wide uppercase border border-blue cursor-pointer
                      hover:bg-purple-600 hover:text-white text-purple-600 
                      ease-linear transition-all duration-150">
                    <FontAwesomeIcon icon={faCloud} className='h-8 w-8'/> 
                    <span className="mt-2 text-base leading-normal">Select a new file</span>
                    <input type='file' className="hidden" />
                </label>
            </div>
            <div className='p-1 h-8 w-auto bg-black rounded-lg flex justify-center items-center'>
                <Button buttonIcon={faCheck}/>
                <Button buttonIcon={faWindowClose}/>
                {/* <Button buttonIcon={faPen}/> */}
            </div>
        </div>
    )
}

export default Banner
