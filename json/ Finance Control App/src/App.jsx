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
