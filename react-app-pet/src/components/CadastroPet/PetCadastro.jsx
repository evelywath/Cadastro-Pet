import React from 'react';

function CadastroPet() {
  return (
    <>
      <form action="" method="post">
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

      </form>
    </>
  );
}

export default CadastroPet;