import React, { Fragment, useEffect, useState } from 'react';
import { Animal, getAnimales } from '../interfaces/animales';
import NavBar from './NavBar';
import axios from 'axios';
import '../css/UserMatches.css';

const UserMatches = () => {
  const [errorMsg, setErrorMsg] = useState('No tiene ningún match aún')
  const [userAnimal, setUserAnimal] = useState<Animal>({
    name: 'No hay animal',
    image:
      'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg',
    petCategory: '',
    petSex: '',
  });

  const [matches, setMatches] = useState<getAnimales>({
    message: [],
  });

  useEffect(() => {
    try {
      axios.get('http://localhost:3001/user')
      .then(res => {
        if (res.status === 200) {
          setUserAnimal({
            name: res.data.firstName,
            image: res.data.image,
            petCategory: res.data.petCategory,
            petSex: res.data.petSex
          });
        } else {
          console.log('Error al obtener foto del usuario')
        }
      })
      .then(() => setErrorMsg(''));
    } catch(e) {
      setErrorMsg('No se pudo obtener su foto de usuario')
    }
  }, []);

  useEffect(() => {
    try {
      axios.get('http://localhost:3001/mutualmatches')
      .then(res => {
        if (res.status === 200) {
          setMatches(res.data.mutualmatches);
        } else {
          console.log('Error al obtener matches')
        }
      })
      .then(() => setErrorMsg(''));
    } catch(e) {
      setErrorMsg('No se pudo obtener sus matches')
    }
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className='container'>
        <div className='col pet-photo-container mt-4'>
        <img
            src={userAnimal.image}
            alt='petPhoto'
            className='pet-photo col-sm-2 shadow mt-4'
          />
          <h1 className='text-center pet_title mt-4 mb-5 overflow-hidden'>
            {userAnimal.name}
          </h1>

        </div>
        <div className='container-flex p-2'>
          {matches.message.length > 0 
          ?
          matches.message.map((animal: Animal) => {
            return (
                <div className='card col-sm-3 match_pet_card shadow mb-5'>
                  <img
                    className='match_pet_img'
                    src={animal.image}
                    alt='petImage'
                  />
                  <div className='card-body'>
                    <h5 className='card-title overflow-hidden'>{animal.name}</h5>
                    <p className='match_card_text card-text'>
                      Es un perro chiquito y bonito.
                    </p>
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>{animal.petCategory}</li>
                    <li className='list-group-item'>{animal.petSex}</li>
                  </ul>
                </div>
            );
            })
          :
          <div>
            {
              errorMsg ? 
              <p className='text-danger h6'>{ errorMsg }</p>
              :
              <span></span>
            }
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default UserMatches;
