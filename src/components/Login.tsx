import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    const updateState = (value: string, func: (a: string) => void) => {
        func(value)
    }

    const loginUser = () => {
        if (!email.trim() || !pass.trim()) return setErrorMsg('Campo Obligatorio')
        navigate('/match')
    }

    return (
        <div className='row mt-5'>
            <div className="col"></div>
            <div className="col">
                <h1 className='login-title mb-5 text-center'>Loguearse en Animal Tinder</h1>
                <form className='form-group'>
                    <input 
                        type='email' 
                        className='form-control w-100 mt-5'
                        placeholder='ejemplo@email.com'
                        onChange={(e) => updateState(e.target.value, setEmail)}
                        />
                    {
                        errorMsg === 'Campo Obligatorio' && !email.trim() ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                    }
                    <input 
                        type='password' 
                        className='form-control mt-4 w-100 mb-4'
                        placeholder='Contraseña'
                        onChange={(e) => updateState(e.target.value, setPass)}
                        />
                    {
                        errorMsg === 'Campo Obligatorio' && !pass.trim() ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                    }
                </form>
                <a 
                    href='/register'
                    className='link-primary a'
                    >¡Registrate gratis!</a>
                <button 
                    className='btn btn-success btn-block mt-3 w-100'
                    onClick={loginUser}
                >
                    Iniciar sesión
                </button>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login;
