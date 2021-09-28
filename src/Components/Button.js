import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Button =(props) => {
    const {
        onClick,
        buttonIcon,
        buttonClassName,
        iconClassName
    } = props;

    return (
        <>
            <button onClick={onClick} className={`${buttonClassName}`}>
                <FontAwesomeIcon icon={buttonIcon} className={`text-white m-1 ${iconClassName}`}/> 
            </button>
        </>
    )
}

export default Button
