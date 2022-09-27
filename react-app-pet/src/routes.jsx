import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CadastroPet from './components/CadastroPet/PetCadastro';
import PetInfo from './components/PetInfo/PetInfo';


function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<CadastroPet/>}/>
            <Route path='/details' element={<PetInfo/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;