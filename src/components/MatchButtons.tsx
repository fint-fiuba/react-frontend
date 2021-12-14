import React from 'react';
import '../css/MatchButtons.css';
import axios from 'axios';
import Cookies from 'universal-cookie';


type ButtonProps = {
    swipe: Function,
}

export const MatchButtons = ({ swipe }: ButtonProps) => {

    return (
        <div className='match_buttons'>
            <div className='match_button_cross' onClick={() => swipe('left')} >
                <i className='bi bi-x-circle-fill bi-lg'></i>
            </div>
            <div className='match_button_check' onClick={() => swipe('right')}>
                <i className='bi bi-check-circle-fill bi-lg'></i>
            </div>
        </div>
    )
}
