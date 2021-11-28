import React, { Fragment } from 'react';

const NavBar = () => {
    return (
        <Fragment>
        <header>
            <nav 
                className='navbar navbar-fixed-top navbar-toggleable-sm navbar-inverse justify-content-between bg-dark'
            >
                <a href='/' className='navbar-brand text-light page-title mar-l-30'>
                    Animal Tinder
                </a>  
                <button className='btn btn-danger mar-r-40'>Cerrar Sesión</button>  
            </nav>  
        </header>
        </Fragment>
    )
}

export default NavBar;
