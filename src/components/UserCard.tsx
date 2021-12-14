import React, { useState, useEffect, ChangeEvent } from 'react';
import '../css/UserCard.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const UserCard = () => {
  const [inputsEstados, setInputsEstados] = useState(true);
  const [errorMsg, setErrorMsg] = useState('')

  const [user, setuser] = useState({
    firstName: '',
    lastName: '',
    petName: '',
    petCategory: '',
    petSex: '',
    image: '',
    petAge: '',
  });

  const [userCopy, setUserCopy] = useState(user);

  const {
    firstName,
    lastName,
    petName,
    petSex,
    petCategory,
    petAge,
    image,
  } = user;

  useEffect(() => {
    const cookie = new Cookies();
    try {
      axios({
        method: 'get',
        params: {
          mail: cookie.get('mail'),
        },
        url: 'http://localhost:3001/user',
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        if (res.status === 200) {
          setuser(res.data);
          setUserCopy(res.data);
          console.log(res.data.image)
        } else {
          console.log('entro');
        }
      })
    } catch(e) {
        console.log('Error al requerir user information')
      }
  }, []);

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  setUserCopy({
    ...userCopy,
    [event.target.name]: event.target.value,
  });
};

const handleCancel = () => {
  setInputsEstados(true);
  setUserCopy(user);
};

const handleEdit = () => {
  setInputsEstados(false);
  console.log('FALTA IMPRIMIR ERRORES')
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!firstName ||
    !lastName ||
    !petName ||
    !petCategory ||
    !petSex ||
    !petAge ||
    !image
    ) return setErrorMsg('Campo Obligatorio')
  
    try {
      const cookie = new Cookies();
      axios({
        method: 'post',
        data: {
          ...userCopy,
          mail: cookie.get('mail')
        },
        url: 'http://localhost:3001/user/update',
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        if (res.status === 200) {
          setInputsEstados(true);
        }
      })
    } catch(e) {
        console.log('NO FUNCIONA EL UPDATE')
      }
};

return (
  <>
    <div className='card user_card shadow-lg p-3 mb-5 bg-white'>
      <div className='card-body user_card_body'>
        <h5 className='user_card_title'>User</h5>
        <form
          className='needs-validation user_card_form'
          noValidate
          onSubmit={handleSubmit}
        >
          <div className='form-group row mb-2'>
            <label
              htmlFor='firstName'
              className='col-sm-4 col-form-label'
            >
              Nombre
            </label>
            <div className='col-sm-8 user_card_input'>
              <input
                type='text'
                disabled={inputsEstados}
                className='form-control required'
                id='firstName'
                name='firstName'
                value={userCopy.firstName}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className='form-group row mb-2'>
            <label htmlFor='lastName' className='col-sm-4 col-form-label'>
              Apellido
            </label>
            <div className='col-sm-8'>
              <input
                type='text'
                disabled={inputsEstados}
                className='form-control required'
                id='lastName'
                name='lastName'
                value={userCopy.lastName}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className='form-group row mb-2'>
            <label htmlFor='petName' className='col-sm-4 col-form-label'>
              Nombre Mascota
            </label>
            <div className='col-sm-8'>
              <input
                type='text'
                disabled={inputsEstados}
                className='form-control required'
                id='petName'
                name='petName'
                value={userCopy.petName}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className='form-group row mb-2'>
            <label htmlFor='petCategory' className='col-sm-4 col-form-label'>
              Sexo Mascota
            </label>
            <div className='col-sm-8'>
              <input
                type='text'
                disabled={inputsEstados}
                className='form-control required'
                id='petCategory'
                name='petCategory'
                value={userCopy.petSex}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className='form-group row mb-2'>
            <label htmlFor='petSex' className='col-sm-4 col-form-label'>
              Especie Mascota
            </label>
            <div className='col-sm-8'>
              <input
                type='text'
                disabled={inputsEstados}
                className='form-control required'
                id='petSex'
                name='petSex'
                value={userCopy.petCategory}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className='form-group row mb-2'>
            <label htmlFor='petAge' className='col-sm-4 col-form-label'>
              Edad Mascota
            </label>
            <div className='col-sm-8'>
              <input
                type='number'
                disabled={inputsEstados}
                className='form-control required'
                id='petAge'
                name='petAge'
                value={userCopy.petAge}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          {!inputsEstados && (
            <>
              <div className='form-group row mb-2'>
                <label htmlFor='formFile' className='col-sm-4 col-form-label'>
                  Image
                </label>
                <div className='col-sm-8'>
                  <input
                    disabled={inputsEstados}
                    className='form-control required'
                    type='file'
                    id='formFile'
                    name='formFile'
                  />
                </div>
              </div>

              <div className='form-group row '>
                <label
                  htmlFor='petImage'
                  className='col-sm-4 col-form-label'
                ></label>
                <img alt='petImage' src={userCopy.image} className='pet_image' />
              </div>
            </>
          )}
          <div className='d-flex justify-content-end pt-5 user_card_buttons'>
            {inputsEstados ? (
              <button
                type='button'
                className='btn btn-primary '
                onClick={handleEdit}
              >
                Editar
              </button>
            ) : (
              <>
                <button
                  type='button'
                  className='btn btn-danger user_card_btn_cancel'
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
                <button
                  type='submit'
                  className='btn btn-success user_card_btn_save'
                >
                  Guardar
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  </>
);
};

export default UserCard;
