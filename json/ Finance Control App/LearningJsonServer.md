# como rodar 
``` bash
#rodar servidor local 
  npx json-server db.json

#rodar react 
  npm install
  nmp run dev 

```  


#  O Projeto: Finance Control App
A ideia é uma aplicação onde o usuário possa registrar entradas (salários, freelas) e saídas (contas, lazer).

1. Estrutura do db.json
Para começar, seu arquivo JSON poderia ter essa estrutura:

```JSON

{
  "transacoes": [
    { "id": "1", "descricao": "Salário", "valor": 5000, "tipo": "entrada", "data": "2023-10-27" },
    { "id": "2", "descricao": "Aluguel", "valor": 1200, "tipo": "saida", "data": "2023-10-28" }
  ],
  "categorias": [
    { "id": "1", "nome": "Lazer" },
    { "id": "2", "nome": "Alimentação" }
  ]
}


```
2. O que você vai praticar:
GET: Listar todas as transações em uma tabela ou cards.

POST: Criar um formulário para adicionar uma nova transação (e ver o db.json atualizar!).

DELETE: Botão para excluir uma transação errada.

PATCH/PUT: Um botão "Editar" que abre um modal para corrigir o valor ou nome de uma conta.

Lógica de Filtro: Usar os recursos do json-server para buscar apenas "entradas" ou apenas "saídas" usando a URL: localhost:3000/transacoes?tipo=entrada.

3. Desafios para subir de nível:
Se o CRUD básico ficar fácil, tente implementar isso:

Dashboard de Totais: Crie três cards no topo: "Entradas", "Saídas" e "Saldo Total". Você precisará somar os valores do JSON para exibir isso.

Filtro por Data: Use inputs de data para filtrar o que aparece na tela.

Loading State: Como o json-server é local e muito rápido, use o comando json-server --watch db.json --delay 1000 para simular um atraso de 1 segundo e treinar a exibição de um "Spinning de Carregamento" no seu site.

4. Por que esse projeto?
Diferente de uma simples "Lista de Tarefas" (To-Do List), um Gerenciador Financeiro exige que você manipule o estado da aplicação de forma mais complexa (ex: se eu apagar uma transação, o saldo total lá no topo precisa diminuir automaticamente).



# codigo de exemplo 

``` javascript

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // 1. Estados para guardar os dados, o status de carregamento e os erros
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect para buscar os dados quando o componente montar
  useEffect(() => {
    // 3. Função async definida dentro do useEffect
    const fetchTransacoes = async () => {
      try {
        // Espera a resposta da API
        const response = await fetch('http://localhost:3000/transacoes');

        // Se a resposta não for OK (ex: erro 404 ou 500), lança um erro
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Espera a conversão da resposta para JSON
        const data = await response.json();

        // Atualiza o estado com os dados recebidos
        setTransacoes(data);
      } catch (e) {
        // Em caso de erro, atualiza o estado de erro
        setError(e);
      } finally {
        // Independentemente de sucesso ou erro, para de carregar
        setLoading(false);
      }
    };

    fetchTransacoes(); // Chama a função para iniciar a busca
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  // 4. Renderização condicional baseada nos estados
  if (loading) return <p>Carregando transações...</p>;
  if (error) return <p>Erro ao buscar dados: {error.message}</p>;

  return (
    <div>
      <h1>Controle Financeiro</h1>
      <h2>Transações</h2>
      <ul>
        {transacoes.map((transacao) => (
          <li key={transacao.id}>
            {transacao.descricao}: R$ {transacao.valor} ({transacao.tipo})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App




```
