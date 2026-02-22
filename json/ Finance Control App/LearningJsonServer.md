# 🛠️ O Projeto: Finance Control App
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

