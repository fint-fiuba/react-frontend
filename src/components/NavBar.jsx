import React, { Fragment } from 'react';

const navBar = () => {
    return (
        <Fragment>
        <header>
            <nav 
                className='navbar navbar-fixed-top navbar-toggleable-sm navbar-inverse justify-content-between bg-dark'
            >
                <a href='/' className='navbar-brand text-light page-title'>
                    Animal Tinder
                </a>    
            </nav>  
        </header>
        </Fragment>
    )
}

export default navBar;
