
import { useState, useEffect } from 'react'
import './App.css'



function App() {
  // 1. Estados para guardar os dados, o status de carregamento e os erros
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTransacoes = async () => {

      try {

        const response = await fetch('http://localhost:3000/transacoes');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTransacoes(data);

      } catch (e) {
        setError(e)
      } finally {
        setLoading(false);

      }
    }

    fetchTransacoes();

  }, []);

  const cadastrarTransacao = async (novaTransacao) => {
    try {

      const response = await fetch('http://localhost:3000/transacoes', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaTransacao)}
      );
    if (response.ok) {
        setTransacoes([...transacoes, novaTransacao]);
      }

    }catch (e) {
      console.error('Erro ao cadastrar transação:', e);
    }


  };


  if (loading) return <p>Carregando transações...</p>;
  if (error) return <p>Erro ao buscar dados: {error.message}</p>;

  return (
    <div style={card}>
      <h1>Controle dinanceiro</h1>
      <h2>Trasações</h2>
      <ul>
        {transacoes.map((transacao) => (
          <li key={transacao.id}>

            {transacao.descricao}: R$ {transacao.valor} ({transacao.tipo})
          </li>


        ))}

      </ul>


      <button onClick={cadastrarTransacao}>Cadastrar Transação</button>




    </div>

  );
}

export default App


const card = {
  border: '2px solid #444',
  borderRadius: '12px',
  padding: '20px',
  margin: '15px 0',
  boxShadow: '4px 4px 0px #444'

}