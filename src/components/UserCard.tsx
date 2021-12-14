import React, { useState, useEffect, ChangeEvent } from "react";
import "../css/UserCard.css";
import axios from 'axios';
import Cookies from "universal-cookie";

const UserCard = () => {
  const [inputsEstados, setInputsEstados] = useState(true);
  const [errorMsg, setErrorMsg] = useState('')

  const [user, setuser] = useState({
    userFirstName: "",
    userLastName: "",
    email: "",
    petName: "",
    animalType: "",
    petGender: "",
    file: "",
    petAge: 0,
  });

  const {
    userFirstName,
    userLastName,
    email,
    petName,
    petGender,
    animalType,
    petAge,
    file,
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
        } else {
          console.log('entro');
        }
      })
    } catch(e) {
        console.log('Error al requerir user information')
      }
  }, []);

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  setuser({
    ...user,
    [event.target.name]: event.target.value,
  });
};

const handleCancel = () => {
  setInputsEstados(true);
  setuser(user);
};

const handleEdit = () => {
  setInputsEstados(false);
  console.log('FALTA IMPRIMIR ERRORES')
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!userFirstName ||
    !userLastName ||
    !email ||
    !petName ||
    !animalType ||
    !petGender ||
    !petAge ||
    !file
    ) return setErrorMsg('Campo Obligatorio')
  console.log("Falta: \n -> Guardarlo usando endpoint");
};

return (
  <>
    <div className="card user_card shadow-lg p-3 mb-5 bg-white">
      <div className="card-body user_card_body">
        <h5 className="user_card_title">User</h5>
        <form
          className="needs-validation user_card_form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="form-group row mb-2">
            <label
              htmlFor="userFirstName"
              className="col-sm-4 col-form-label"
            >
              First Name
            </label>
            <div className="col-sm-8 user_card_input">
              <input
                type="text"
                disabled={inputsEstados}
                className="form-control required"
                id="userFirstName"
                name="userFirstName"
                value={userFirstName}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className="form-group row mb-2">
            <label htmlFor="userLastName" className="col-sm-4 col-form-label">
              Last Name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                disabled={inputsEstados}
                className="form-control required"
                id="userLastName"
                name="userLastName"
                value={userLastName}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className="form-group row mb-2">
            <label htmlFor="email" className="col-sm-4 col-form-label">
              Email
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                disabled={inputsEstados}
                className="form-control required"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className="form-group row mb-2">
            <label htmlFor="petName" className="col-sm-4 col-form-label">
              Pet Name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                disabled={inputsEstados}
                className="form-control required"
                id="petName"
                name="petName"
                value={petName}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className="form-group row mb-2">
            <label htmlFor="animalType" className="col-sm-4 col-form-label">
              Pet Gender
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                disabled={inputsEstados}
                className="form-control required"
                id="animalType"
                name="animalType"
                value={animalType}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className="form-group row mb-2">
            <label htmlFor="petGender" className="col-sm-4 col-form-label">
              Pet Type
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                disabled={inputsEstados}
                className="form-control required"
                id="petGender"
                name="petGender"
                value={petGender}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          <div className="form-group row mb-2">
            <label htmlFor="petAge" className="col-sm-4 col-form-label">
              Edad Mascota
            </label>
            <div className="col-sm-8">
              <input
                type="number"
                disabled={inputsEstados}
                className="form-control required"
                id="petAge"
                name="petAge"
                value={petAge}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          </div>

          {!inputsEstados && (
            <>
              <div className="form-group row mb-2">
                <label htmlFor="formFile" className="col-sm-4 col-form-label">
                  Image
                </label>
                <div className="col-sm-8">
                  <input
                    disabled={inputsEstados}
                    className="form-control required"
                    type="file"
                    id="formFile"
                    name="formFile"
                  />
                </div>
              </div>

              <div className="form-group row ">
                <label
                  htmlFor="petImage"
                  className="col-sm-4 col-form-label"
                ></label>
                <img alt="petImage" src={file} className="pet_image" />
              </div>
            </>
          )}
          <div className="d-flex justify-content-end pt-5 user_card_buttons">
            {inputsEstados ? (
              <button
                type="button"
                className="btn btn-primary "
                onClick={handleEdit}
              >
                Editar
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-danger user_card_btn_cancel"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-success user_card_btn_save"
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
