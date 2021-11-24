import React, { useState } from 'react'

const MIN_PASS = 6

const Login = () => {
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [petName, setPetName] = useState('')
    const [animalType, setAnimalType] = useState('')
    const [petGender, setPetGender] = useState('')
    const [file, setFile] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const updateState = (e, func) => {
        func(e.target.value)
    }

    const registerUser = (e) => {
        if (!userFirstName ||
            !userLastName || 
            !email || 
            !petName ||
            !animalType ||
            !petGender ||
            !file            
            ) return setErrorMsg('Campo Obligatorio')
            
        if (pass.length < MIN_PASS) return setErrorMsg('La contraseña debe tener 6 caracteres o más')

    }

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <h1 className='text-center register-title'>Registrarse en Animal Tinder</h1>
                <form className='form-group' form='register'>
                    <input 
                        type='text' 
                        className='form-control w-100 mt-5'
                        placeholder='Nombre'
                        onChange={(e) => updateState(e, setUserFirstName)}
                        />
                    {
                        errorMsg === 'Campo Obligatorio' && !userFirstName.trim() ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                    }
                    <input 
                        type='text' 
                        className='form-control w-100 mt-4'
                        placeholder='Apellido'
                        onChange={(e) => updateState(e, setUserLastName)}
                        />
                    {
                        errorMsg === 'Campo Obligatorio' && !userLastName.trim() ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                    }
                    <input 
                        type='email' 
                        className='form-control w-100 mt-4'
                        placeholder='ejemplo@email.com'
                        onChange={(e) => updateState(e, setEmail)}
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
                        className='form-control mt-4 w-100'
                        placeholder='Contraseña'
                        onChange={(e) => updateState(e, setPass)}
                        />
                    {
                        errorMsg && !(pass.length >= 6) ?
                        <p className='text-danger mt-3'>
                            {errorMsg + ', la contraseña debe tener al menos 6 caracteres'}
                        </p>
                        :
                        <span></span>
                    }
                    <input 
                        type='text' 
                        className='form-control w-100 mt-4'
                        placeholder='Nombre de Mascota'
                        onChange={(e) => updateState(e, setPetName)}
                        />
                    {
                        errorMsg === 'Campo Obligatorio' && !petName.trim() ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                    }
                    <select
                        form='register'
                        className='form-select mt-4 w-100'    
                        onChange={(e) => updateState(e, setAnimalType)}
                    >
                        <option value='Perro'>Perro</option>
                        <option value='Gato'>Gato</option>
                    </select>
                    <select 
                        form='register'
                        className='form-select mt-4 w-100'
                        onChange={(e) => updateState(e, setPetGender)}
                    >
                        <option value='Macho'>Macho</option>
                        <option value='Hembra'>Hembra</option>
                    </select>
                    <input 
                        type='file'
                        className='form-control mt-4 w-100'
                        onChange={(e) => updateState(e, setFile)}
                        />
                    {
                        errorMsg === 'Campo Obligatorio' && !file ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                    }
                </form>
                <button 
                    className='btn btn-success btn-block mt-5 w-100 mb-5'
                    onClick={registerUser}
                >
                    Registrarse
                </button>
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login;