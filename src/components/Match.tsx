import React, { Fragment, useState } from 'react'
import NavBar from './NavBar'

const Match = () => {

    const [searching, setSearching] = useState(false)
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')

    const searchPartner = async () => {
        setSearching(true)
        //const possibleMatches = await 
        // setPhoto(possibleMatches.photo)
        // setName(possibleMatches.name)
        setSearching(false)
    }

    return (
        <Fragment>
            <NavBar></NavBar>
            <div className='row'>
                <div className='col'></div>
                <div className='col'>
                    <h1 className='mt-5 display-6'>Buscar Pareja para su Mascota</h1>
                    {
                        (photo && name) ? // ACA HAY QUE NEGAR
                        <div className='d-flex justify-content-center w-100'>
                            {   
                                !searching ?                    
                                <button 
                                    className='btn btn-primary mt-5 btn-lg'
                                    onClick={searchPartner}
                                >Iniciar Búsqueda</button>
                                :
                                <p className='text-muted h5 mt-5 text-center'>Buscando Pareja...</p>
                            }
                        </div>   
                        :
                        <div className='d-flex justify-content-between flex-column w-100'>
                            {
                                !searching ? 
                                <Fragment>
                                <img className='w-100 h-100' src='data:image/jpeg;base64,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' alt='userPet' />
                                <p className='text-secondary h4 mb-4 mt-3'>Horacio</p>
                                <div className='d-flex justify-content-around w-100'>
                                    <button
                                        className='btn btn-danger btn-lg w-25'
                                        onClick={searchPartner}    
                                    >No me gusta</button>
                                    <button
                                        className='btn btn-primary btn-lg w-25'
                                        onClick={searchPartner}
                                    >Me gusta</button>
                                </div>
                                </Fragment>
                                :
                                <p className='text-muted h5 mt-5 text-center'>Buscando Pareja...</p>
                            }
                        </div>
                    } 
                </div>
                <div className='col'></div>
            </div>
        </Fragment>
    )
}

export default Match