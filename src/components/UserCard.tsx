import React from "react";
import "../css/UserCard.css";

type UserProps = {
  userFirstName: string;
  userLastName: string;
  email: string;
  petName: string;
  animalType: string;
  petGender: string;
  file: string;
};

const UserCard = ({
  userFirstName,
  userLastName,
  email,
  petName,
  petGender,
  file,
}: UserProps) => {
  return (
    <div className="card user_card">
      <div className="card-body">
        <h5 className="user_card_title">Usuario</h5>
        <form noValidate>
          <div className="form-group row">
            <label
              htmlFor="userFirstName"
              className="col-sm-6 col-form-label font-weight-bold"
            >
              First Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="userFirstName"
                value={userFirstName}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="userLastName"
              className="col-sm-6 col-form-label font-weight-bold"
            >
              Last Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="userLastName"
                value={userLastName}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="email"
              className="col-sm-6 col-form-label font-weight-bold"
            >
              Email
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="email"
                value={email}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="petName"
              className="col-sm-6 col-form-label font-weight-bold"
            >
              Pet Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="petName"
                value={petName}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="petGender"
              className="col-sm-6 col-form-label font-weight-bold"
            >
              Pet Gender
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="petGender"
                value={petGender}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="formFile"
              className="col-sm-6 col-form-label font-weight-bold"
            >
              Imagen
            </label>
            <div className="col-sm-6">
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-end pt-5">
          <a href="/user" className="btn btn-primary ">
            Editar
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
