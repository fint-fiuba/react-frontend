import React , {useState, useEffect} from 'react';

import NavBar2 from './NavBar2';
import UserCard from './UserCard';
import userData from "../data/getUser";


const UserInformation = () => {

    const [user, setuser] = useState({
        userFirstName : '',
        userLastName : '',
        email : '',
        petName : '',
        animalType : '',
        petGender : '',
        file : ''
    });

    useEffect(() => {
        setuser(userData);
    }, [])


    return (
        <>
            <NavBar2 />
            <section className="section">
                <UserCard {...user} />
            </section>
        </>
    )
}

export default UserInformation
