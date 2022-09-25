import React from 'react';
import { ButtonSubmit, FormPet } from '../../style/styled'
import './cadastro.css'

function CadastroPet() {
  return (
    <div className='form-cadastro-pet'>
      <FormPet action="" method="post">
        <h3>Cadastro</h3>

        {/*Nome pet*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite o nome do Pet' />
        </div>


        {/*Idade Pet*/}
        <div>
          <div></div>
          <input type="number" placeholder='Digite a Idade do Pet' />
        </div>


        {/*Raça*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite a Raça do Pet'/>
        </div>


        {/*Tamanho*/}
        <div>
          <div></div>
          <input type="number" placeholder='Digite o Tamanho do Pet' />
        </div>


        {/*Nome do Dono*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite o Nome do(a) Dono(a)' />
        </div>


        {/*Telefone do Dono*/}
        <div>
          <div></div>
          <input type="text" placeholder='Digite o Nome do(a) Dono(a)'/>
        </div>


        {/*Imagem do Pet*/}
        <div>
          <div></div>
          <input type="text" placeholder='Coloque uma Imagem de Seu Pet' />
        </div>


        {/*Observações*/}
        <div>
          <div></div>
          <textarea type="text" placeholder='Digite as Observações'/>
        </div>
        

        <div className='btn'>
          <ButtonSubmit>Cadastrar</ButtonSubmit>
        </div>
      </FormPet>

      <div className="text-pet">
        <div>
          <h2>A atenção que seu pet merece!</h2>            
        </div>
      </div>

    </div>
  );
}

export default CadastroPet;