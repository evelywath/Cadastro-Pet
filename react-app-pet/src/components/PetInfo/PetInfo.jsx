import React from 'react'
import { Link } from 'react-router-dom';
import './details.css'
const PetInfo = () => {
    return(
        <div>
            <div className='container-details'>
                <div className='logo'>
                    <h1>BEM VINDO AO PET-DETAILS</h1>
                    <h4>Aqui voçê pode verificar se seu animal foi cadastrado com sucesso</h4>
                </div>
                <div className='register-page'>
                    <Link to='/'>Cadastre um Novo Pet</Link>
                </div>
            </div>
        </div>
    )
}

export default PetInfo;