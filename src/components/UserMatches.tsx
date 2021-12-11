import React, { Fragment, useEffect, useState } from "react";
import { Animal, getAnimales, getAnimal } from "../interfaces/animales";
import NavBar from "./NavBar";
import "../css/UserMatches.css";
import user from "../data/getUser";

const UserMatches = () => {
  const [userAnimal, setUserAnimal] = useState<getAnimal>({
    message: {
      name: "No hay animal",
      image:
        "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
      petType: "",
      petGender: "",
    },
  });

  const [matches, setMatches] = useState<getAnimales>({
    message: [],
  });

  useEffect(() => {
    fetch("http://localhost:6060/animal")
      .then((res) => res.json())
      .then(setUserAnimal);
  }, []);

  useEffect(() => {
    fetch("http://localhost:6060/animales")
      .then((res) => res.json())
      .then(setMatches);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div className="col pet-photo-container mt-4">
        <img
            src={userAnimal.message.image}
            alt="petPhoto"
            className="pet-photo col-sm-2 shadow mt-4"
          />
          <h1 className="text-center pet_title mt-4 mb-5 overflow-hidden">
            {userAnimal.message.name}
          </h1>

        </div>
        <div className="container-flex p-2">
          {matches.message.length > 0 
          ?
          matches.message.map((animal: Animal) => {
            return (
                <div className="card col-sm-3 match_pet_card shadow mb-5">
                  <img
                    className="match_pet_img"
                    src={animal.image}
                    alt="petImage"
                  />
                  <div className="card-body">
                    <h5 className="card-title overflow-hidden">{animal.name}</h5>
                    <p className="match_card_text card-text">
                      Es un perro chiquito y bonito.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{animal.petType}</li>
                    <li className="list-group-item">{animal.petGender}</li>
                  </ul>
                </div>
            );
          })
          :
          <div >
            No hay Matcheos para tu animal
            </div>

            }
        </div>
      </div>
    </>
  );
};

export default UserMatches;
