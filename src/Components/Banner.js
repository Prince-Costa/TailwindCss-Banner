import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import bannerImage from '../Image/food.jpg'
import logo from '../Image/logo.jpg'
const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerImage})`}} className='mx-auto  h-56 w-4/5 p-4 border-4 rounded-md  my-5 flex justify-between bg-no-repeat shadow-lg'>
            <div className='my-32 mx-8'> 
                 <img className="h-16 w-16 rounded-full border-4" src={logo} alt="Prince Logo" />
            </div>
            <div className='p-1 h-8 w-8 bg-black rounded-lg flex justify-center items-center'>
                <FontAwesomeIcon icon={faPen} className='text-white'/>
            </div>
        </div>
    )
}

export default Banner
