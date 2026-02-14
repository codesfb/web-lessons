import React, { useState } from 'react';

/**
 * GUIA RÁPIDO DO USESTATE:
 * const [estado, setEstado] = useState(valorInicial);
 * * 1. estado: É a variável que guarda o valor (leitura).
 * 2. setEstado: É a função que avisa o React: "Ei, mudei! Desenha a tela de novo!" (escrita).
 * 3. valorInicial: O valor que a variável terá assim que o componente nascer.
 */


//exercicio 0


function MudarNome() {
    const [nome, setNome] = useState("Maria");

  return (
      <div style={cardStyle}>
        <h3>0. Exercício: Mudar Nome</h3>
        <p>Nome : {nome}</p>
        <button onClick={() =>  setNome(nome === "Maria" ? "João": "Maria")}>Mudar Nome</button>
         


      </div>


  );
}



// --- EXERCÍCIO 1: O CONTADOR (Trabalhando com Números) ---
function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div style={cardStyle}>
      <h3>1. Exercício: Contador</h3>
      <p>O número atual é: <strong>{count}</strong></p>
      {/* Aqui usamos uma função anônima para chamar o setCount */}
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>
      <button onClick={() => setCount(0)}>Resetar</button>
    </div>
  );
}

// --- EXERCÍCIO 2: O ESPELHO (Trabalhando com Strings e Inputs) ---
function Espelho() {
  const [texto, setTexto] = useState("");

  return (
    <div style={cardStyle}>
      <h3>2. Exercício: O Espelho</h3>
      <input 
        type="text" 
        placeholder="Digite algo..."
        // O valor do input "segue" o que está no estado
        value={texto} 
        // Toda vez que você digita, o evento 'e' captura o valor e manda pro setTexto
        onChange={(e) => setTexto(e.target.value)} 
      />
      <p>Você está digitando: <em>{texto}</em></p>
    </div>
  );
}

// --- EXERCÍCIO 3: O INTERRUPTOR (Trabalhando com Booleanos) ---
function Interruptor() {
  const [ligado, setLigado] = useState(false);

  return (
    <div style={{ ...cardStyle,color: ligado ? 'black' : 'white',backgroundColor: ligado ? '#fffbe6' : '#050505ff' }}>
      <h3>3. Exercício: Interruptor</h3>
      <p>A luz está: <strong>{ligado ? "ACESA 💡" : "APAGADA 🌑"}</strong></p>
      {/* O sinal de '!' (not) inverte o booleano atual: se true vira false e vice-versa */}
      <button onClick={() => setLigado(!ligado)}>
        {ligado ? "Apagar" : "Acender"}
      </button>
    </div>
  );
}

// --- EXERCÍCIO 4: LISTA DE TAREFAS (Trabalhando com Arrays - Nível Hard) ---
function ListaTarefas() {
  const [tarefa, setTarefa] = useState(""); // Guarda o texto da nova tarefa
  const [lista, setLista] = useState([]);  // Guarda o array de tarefas

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return; // Não adiciona se estiver vazio

    /**
     * IMPORTANTE: No React, não usamos lista.push().
     * Criamos um NOVO array usando o spread operator [...lista]
     * Isso diz: "Pegue tudo que já tinha na lista e coloque a nova tarefa no fim".
     */
    setLista([...lista, tarefa]);
    setTarefa(""); // Limpa o input depois de adicionar
  };

  return (
    <div style={cardStyle}>
      <h3>4. Exercício: Lista de Tarefas</h3>
      <input 
        value={tarefa} 
        onChange={(e) => setTarefa(e.target.value)} 
        placeholder="Nova tarefa..."
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


function ProductList() {
  const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

  const listItems = products.map(product =>
    <li style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }} key={product.id}>
      {product.title}
    </li>
  );

  return (  
    <div style={cardStyle}>
      <h3>5. Exercício: Lista de Produtos</h3>
      <ul>{listItems}</ul>
    </div>
  );
}











// --- EXERCÍCIO 2: O SINAL DE TRÂNSITO ---
// Objetivo: Alternar texto entre "PARE" (vermelho) e "SIGA" (verde).
export function SinalTransito() {
  // [1] Crie um estado (pode ser um booleano ou a própria string do texto)

  return (
    <div style={cardStyle}>
      <h2>2. Sinal de Trânsito</h2>
      {/* [2] Use o estado para definir a cor no style e o texto no parágrafo */}
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        {"PARE ou SIGA"}
      </p>
      
      {/* [3] Crie a lógica para alternar o sinal aqui */}
      <button onClick={() => {}}>Trocar Sinal</button>
    </div>
  );
}

// --- EXERCÍCIO 3: CONTADOR DE CLIQUES ---
// Objetivo: O botão deve mostrar quantas vezes foi clicado.
export function ContadorCliques() {
  // [1] Inicie o contador com 0

  return (
    <div style={cardStyle}>
      <h2>3. Contador de Cliques</h2>
      {/* [2] O texto do botão deve mostrar o valor do estado */}
      <button onClick={() => {}}>
        Você me clicou {"?"} vezes
      </button>
    </div>
  );
}

// --- EXERCÍCIO 4: MOSTRAR/ESCONDER SENHA ---
// Objetivo: Alternar o tipo do input entre 'password' e 'text'.
export function RevelarSenha() {
  // [1] Use um booleano (ex: mostrar, setMostrar) começando como false

  return (
    <div style={cardStyle}>
      <h2>4. Mostrar/Esconder Senha</h2>
      {/* [2] O atributo 'type' deve ser dinâmico baseado no seu estado */}
      <input type="password" placeholder="Digite sua senha" />
      
      {/* [3] O botão deve inverter o estado ao ser clicado */}
      <button onClick={() => {}}>
        {"Mostrar ou Esconder"}
      
      </button>
    </div>
  );
}

// --- EXERCÍCIO 5: BOTÃO DE LIKE ---
// Objetivo: Um botão que alterna entre "curtido" e "não curtido".
export function BotaoLike() {
  // [1] Crie o estado de curtida (booleano)

  return (
    <div style={cardStyle}>
      <h2>5. Botão de Like</h2>
      {/* [2] Mude o texto e a cor do botão baseado no estado */}
      <button 
        style={{ backgroundColor: 'white' }}
        onClick={() => {}}
      >
        {"🤍 Like ou ❤️ Liked"}
      </button>
    </div>
  );
}






// --- COMPONENTE PRINCIPAL QUE RENDERIZA TUDO ---
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Laboratório de useState 🧪</h1>
      <p>Estude cada bloco abaixo para entender como o estado se comporta.</p>
      
      
      
      <MudarNome />
      <Contador />
      <Espelho />
      <Interruptor />
      <ListaTarefas />
      <ProductList />
    </div>
  );
}

// Estilo apenas para deixar os exercícios organizados em "caixinhas"
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  margin: '15px 0',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
};