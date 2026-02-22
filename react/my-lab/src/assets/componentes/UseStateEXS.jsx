import React, { useState } from 'react';

/**
 * 🛠️ LABORATÓRIO DE REACT: DESAFIO TOTAL
 * * Regras:
 * 1. Crie cada componente como uma 'export function NomeDoComponente() { ... }'
 * 2. Lembre-se: Componentes começam com LETRA MAIÚSCULA.
 * 3. Use os 'cardStyle' para manter a organização visual.
 */

// --------------------------------------------------------------------------
// EXERCÍCIO 1: MudarNome
// Objetivo: Um parágrafo que mostra um nome e um botão que alterna 
// entre "Maria" e "João" usando um ternário.
// --------------------------------------------------------------------------

function Aviso(){

  return(
    <div style={{...cardStyle}}>
      <i >Nessa pagina eu entendi sobre o useState do react </i>



    </div>
    
  );

}

export function MudarNome(){
  const [nome, setNome] = useState("Maria")

  return(
    <div style={{...cardStyle}}>
      <h3>Exercicio 1 </h3 >
      <p >Muda nome:{nome}</p>
      <button onClick={ () => {setNome(nome == "Maria"? "João": "Maria")} }>Clique em mim </button>
      <i style={{color:"#4d4d4dff"}}>Experimentar mais depois</i>

    </div>

  );
}



// --------------------------------------------------------------------------
// EXERCÍCIO 2: Contador
// Objetivo: Um estado numérico. Três botões: um que soma +1, 
// um que subtrai -1 e um que reseta para 0.
// --------------------------------------------------------------------------
export function Contador(){

  const [count, setCount] = useState(0);

  return (
      <div style={{...cardStyle}}>
        
        <h3>Exercicio 3</h3>
        <p>Contador:{count}</p>
        <button onClick={()=>  {setCount(count + 1 )}} > Aumentar 1 </button>
        <button onClick={()=>  {setCount(count - 1 )}} > Diminuir 1 </button>
        <button onClick={() => {setCount( 0)}}>Limpar </button>


      </div>
  );  
}





// --------------------------------------------------------------------------
// EXERCÍCIO 3: Espelho
// Objetivo: Um input de texto. Abaixo dele, um parágrafo que 
// exibe exatamente o que está sendo digitado (onChange).
// --------------------------------------------------------------------------

export function Espelho(){
    const [txt, setTxt] = useState("");

    return(
      <div style={{...cardStyle}}>
          <h3></h3>
          <input type="text" 
            placeholder="Digite algo"

            value = {txt}

            onChange={(e)=> setTxt(e.target.value)}
          />

        <p>Voce esta digitando: {txt}</p>

      </div>

    );


}


// --------------------------------------------------------------------------
// EXERCÍCIO 3: Interruptor
// Objetivo: Um estado booleano (true/false). O botão deve inverter o estado.
// Se true: Fundo do card claro, texto "ACESO".
// Se false: Fundo do card escuro, texto "APAGADO".
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// EXERCÍCIO 4: ListaTarefas
// Objetivo: Dois estados (um para o texto do input, outro para um array []).
// Um botão "Adicionar" que pega o texto e joga no array (use spread operator).
// Use o .map() para listar as tarefas em <li> dentro de uma <ul>.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// EXERCÍCIO 5: SinalTransito
// Objetivo: Um estado que guarda "vermelho", "amarelo" ou "verde".
// Um botão "Próximo" que troca para a cor seguinte na ordem do semáforo.
// Dica: Use if/else ou um objeto de mapeamento para decidir a próxima cor.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// EXERCÍCIO 6: RevelarSenha
// Objetivo: Um input do tipo password. Um botão ao lado que, ao ser clicado,
// muda o atributo 'type' do input para 'text' e o texto do botão para 'Esconder'.
// --------------------------------------------------------------------------


// --- COMPONENTE PRINCIPAL (Renderize seus componentes aqui dentro) ---
export default function PageEXS() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      <h1>react lab  🧪</h1>
      <p></p>
      <Aviso/>
      <MudarNome/>
      <Contador/>
      <Espelho/>
      
    </div>
  );
}

// Estilo para você usar no 'style={cardStyle}' de cada componente
const cardStyle = {
  border: '2px solid #444',
  borderRadius: '12px',
  padding: '20px',
  margin: '15px 0',
  boxShadow: '4px 4px 0px #444'
};