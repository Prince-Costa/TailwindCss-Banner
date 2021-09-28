import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloud} from '@fortawesome/free-solid-svg-icons'

import Button from './Button'

const BannerEdit = () => {
    return (
            <div className='mx-auto  h-56 w-4/5 p-4 border-4 rounded-md  my-5 
            flex justify-between bg-no-repeat shadow-lg bg-gray-500'>
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
            <div className='p-1 h-8 w-8 bg-black rounded-lg flex justify-center items-center'>
                {/* <Button buttonIcon={faWindowClose}/> */}
            </div>
        </div>
    )
}

export default BannerEdit
