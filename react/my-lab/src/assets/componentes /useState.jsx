import React, { useState } from 'react';

/**
 * 🛠️ LABORATÓRIO DE REACT: DESAFIO TOTAL
 * * Regras:
 * 1. Crie cada componente como uma 'export function NomeDoComponente() { ... }'
 * 2. Lembre-se: Componentes começam com LETRA MAIÚSCULA.
 * 3. Use os 'cardStyle' para manter a organização visual.
 */

// --------------------------------------------------------------------------
// EXERCÍCIO 0: MudarNome
// Objetivo: Um parágrafo que mostra um nome e um botão que alterna 
// entre "Maria" e "João" usando um ternário.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// EXERCÍCIO 1: Contador
// Objetivo: Um estado numérico. Três botões: um que soma +1, 
// um que subtrai -1 e um que reseta para 0.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// EXERCÍCIO 2: Espelho
// Objetivo: Um input de texto. Abaixo dele, um parágrafo que 
// exibe exatamente o que está sendo digitado (onChange).
// --------------------------------------------------------------------------


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
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mão na Massa: React useState 🧪</h1>
      <p>Desenvolva os componentes acima e chame-os aqui embaixo para testar.</p>

      {/* Exemplo de como chamar depois de criado: <MudarNome /> */}
      
    </div>
  );
}

// Estilo para você usar no 'style={cardStyle}' de cada componente
const cardStyle = {
  border: '2px solid #444',
  borderRadius: '12px',
  padding: '20px',
  margin: '15px 0',
  backgroundColor: '#f9f9f9',
  boxShadow: '4px 4px 0px #444'
};