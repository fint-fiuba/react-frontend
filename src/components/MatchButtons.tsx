import React from 'react';
import '../css/MatchButtons.css';
import axios from 'axios';
import Cookies from 'universal-cookie';


type ButtonProps = {
    swipe: Function
}

export const MatchButtons = ( {swipe} : ButtonProps, otherMail : String ) => {
    const swipeLeft = () => {
        swipe('left');
        const cookie = new Cookies();

        const objectData = {
            mail: cookie.get('mail'),
            otherMail: otherMail
        }

        try {

            axios.post(
              'http://localhost:3001/user/reject',
              objectData,
              {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
              }
            )
        } catch (error) {
            console.log('Error al rejectar');
        }
    }

    const swipeRight = () => {
        swipe('right');
        const cookie = new Cookies();

        const objectData = {
            mail: cookie.get('mail'),
            otherMail: otherMail
        }

        try {

            axios.post(
              'http://localhost:3001/user/reject',
              objectData,
              {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
              }
            )
        } catch (error) {
            console.log('Error al aceptar');
        }
    }


    return (
        <div className='match_buttons'>
            <div className='match_button_cross' onClick={() => swipeLeft()} >
                <i className='bi bi-x-circle-fill bi-lg'></i>
            </div>
            <div className='match_button_check' onClick={() => swipeRight()}>
                <i className='bi bi-check-circle-fill bi-lg'></i>
            </div>
        </div>
    )
}
