import React from 'react';
import {BrowserRouter, Routes, Route} 
from 'react-router-dom'
import CadastroPet from './components/CadastroPet/PetCadastro';

function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<CadastroPet/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;