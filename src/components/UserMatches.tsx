import React, { Fragment, useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom';
import "../css/UserMatches.css";

const UserMatches = () => {
    const [matchesFound, setMatchesFound] = useState([])

    const getMatches = () => { 
        // LLAMAR A BACK
        //setMatchesFound()
    }

    useEffect(() => {
        return () => {
            getMatches()
        }
    }, [])

    return (
        <Fragment>
            <NavBar></NavBar>
            <div className='row'>
                <div className='col'></div>
                <div className='col pet-photo-container'>
                    <h1 className='text-center login-title mt-4 mb-5 overflow-hidden'>Nombre Mascota</h1>
                    <img src='data:image/jpeg;base64,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'
                        alt='petPhoto' 
                        className='pet-photo mb-5'/>
                    <div className='matches-container'>
                        <h6 className='overflow-hidden login-title mt-4 matches-title'>
                            Parejas encontradas
                        </h6>                  
                        {
                            matchesFound.length !== 0 ?
                            <ul>
                                {
                                    matchesFound.map((match) => {
                                        return ( 
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <li key={match + 'li'} className='h5 mt-2'>Nombre match y link</li>
                                                <button key={match + 'btn'} className='btn btn-danger mt-2 remove-btn'>Eliminar</button>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                            :
                            <p className='text-center h5 mb-3'>Aún no se encontraron parejas</p>
                        }
                    </div>  
                </div>
                <div className='col'></div>
            </div>
        </Fragment>
    )
}

export default UserMatches
