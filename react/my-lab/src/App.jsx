// src/App.jsx
import React, { useState } from 'react';
import { ExerciciosCompletos } from './Labs';

export default function App() {
  // O estado 'tela' controla o que está visível
  const [tela, setTela] = useState('home');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Lógica de Troca de Tela */}
      {tela === 'home' ? (
        // --- PÁGINA INICIAL ---
        <div style={homeStyle}>
          <h1>🚀 Meu Guia de Estudos React</h1>
          <p>Selecione um tópico para praticar:</p>
          
          <div style={gridStyle}>
            <button onClick={() => setTela('exercicios')} style={cardBtn}>
              <h3>Hook: useState</h3>
              <p>Praticar troca de nomes, contadores e listas.</p>
            </button>

            <button disabled style={{ ...cardBtn, opacity: 0.5 }}>
              <h3>Hook: useEffect (Bloqueado)</h3>
              <p>Em breve...</p>
            </button>
          </div>
        </div>
      ) : (
        // --- PÁGINA DE EXERCÍCIOS ---
        <ExerciciosCompletos voltar={() => setTela('home')} />
      )}
    </div>
  );
}

// Estilos rápidos para o menu
const homeStyle = { textAlign: 'center', marginTop: '50px' };
const gridStyle = { display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' };
const cardBtn = {
  padding: '20px',
  width: '250px',
  cursor: 'pointer',
  border: '2px solid #333',
  borderRadius: '12px',
  backgroundColor: '#fff'
};