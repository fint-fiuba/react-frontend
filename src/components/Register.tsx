import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import imageToBase64 from 'image-to-base64';

const MIN_PASS = 6

const Login = () => {
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [petName, setPetName] = useState('')
    const [petAge, setPetAge] = useState('')
    const [animalType, setAnimalType] = useState('DOG')
    const [petGender, setPetGender] = useState('MALE')
    const [file, setFile] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    const updateState = (value: string, func: (a: string) => void) => {
        func(value)
    }
    
    const registerUser = async () => {
        if (!userFirstName ||
            !userLastName ||
            !email ||
            !petName ||
            !animalType ||
            !petGender ||
            !petAge ||
            !file
            ) return setErrorMsg('Campo Obligatorio')
            
        if (pass.length < MIN_PASS) return setErrorMsg('La contraseña debe tener 6 caracteres o más')

        const objectData = {
            firstName: userFirstName,
            lastName: userLastName,
            petName: petName,
            petCategory: animalType,
            petSex: petGender, 
            petAge: petAge,
            image: file,
            mail: email,
            password: pass
        };

        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3001/auth/register',
                data: objectData,
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                navigate('/');
            } else {
                console.log('entro');
            }
        } catch (error) {
            setErrorMsg('Error al loguear');
        }
    };

return (
    <div className='row mt-5'>
        <div className='col'></div>
        <div className='col'>
            <h1 className='text-center register-title'>Registrarse en Animal Tinder</h1>
            <form className='form-group'>
                <input
                    type='text'
                    className='form-control w-100 mt-5'
                    placeholder='Nombre'
                    onChange={(e) => updateState(e.target.value, setUserFirstName)}
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
                    onChange={(e) => updateState(e.target.value, setUserLastName)}
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
                    className='form-control mt-4 w-100'
                    placeholder='Contraseña'
                    onChange={(e) => updateState(e.target.value, setPass)}
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
                    onChange={(e) => updateState(e.target.value, setPetName)}
                />
                {
                    errorMsg === 'Campo Obligatorio' && !petName.trim() ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                }
                <input
                    type='number'
                    className='form-control w-100 mt-4'
                    placeholder='Edad de Mascota'
                    onChange={(e) => updateState(e.target.value, setPetAge)}
                />
                {
                    errorMsg === 'Campo Obligatorio' && !petAge.trim() ?
                        <p className='text-danger mt-3'>
                            {errorMsg}
                        </p>
                        :
                        <span></span>
                }
                <select
                    form='register'
                    className='form-select mt-4 w-100'
                    onChange={(e) => updateState(e.target.value, setAnimalType)}
                >
                    <option value='Perro'>Perro</option>
                    <option value='Gato'>Gato</option>
                </select>
                <select
                    form='register'
                    className='form-select mt-4 w-100'
                    onChange={(e) => updateState(e.target.value, setPetGender)}
                >
                    <option value='Macho'>Macho</option>
                    <option value='Hembra'>Hembra</option>
                </select>
                <input
                    type='file'
                    className='form-control mt-4 w-100'
                    onChange={async (e) => {
                        try {
                            const image = await imageToBase64(e.target.value);
                            updateState(image, setFile)
                        } catch(e) {
                            console.log('Error al transformar la img')
                        }
                    }}
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
)}

export default Login;