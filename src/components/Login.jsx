import React, { useState } from 'react'

const MIN_PASS = 6

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgError, setMsgError] = useState('')

    const registerUser = (e) => {
        setMsgError('')
        if (pass.length < MIN_PASS) return setMsgError('La contraseña debe tener 6 caracteres o mas')

        //auth.createUserWithEmailAndPassword(email, pass)
        //.then(() => {
            //navigate('/')
        //})
        //.catch(() => {
        //    setMsgError('Email ya existente')
        //})
    }

    const loginUser = () => {
        if (!email.trim() || !pass.trim()) return setMsgError('Ambos campos deben estar llenos')
        //auth.signInWithEmailAndPassword(email, pass)
        //.then(navigate('/'))
        .catch(() => {
            setMsgError('Email o password incorrectos')
        })
    }

    return (
        <div className='row mt-5'>
            <div className="col"></div>
            <div className="col">
                <form className='form-group'>
                    <input 
                        type='email' 
                        className='form-control w-100'
                        placeholder='example@email.com'
                        />
                    <input 
                        type='password' 
                        className='form-control mt-4 w-100'
                        placeholder='password'
                        />
                </form>
                <button 
                    className='btn btn-success btn-block mt-5 w-100'
                    onClick={registerUser}
                >
                    Iniciar sesión
                </button>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login;
