// src/App.jsx
import React, { useState } from 'react';
import PageEXS from './assets/componentes/UseStateEXS.jsx'; // Corrigido: Apontando para o arquivo do componente
import './assets/componentes/Home.css';

export default function App() {
  // O estado 'tela' controla o que está visível
  const [tela, setTela] = useState('home');

  return (
    <div className="home-container">
      {/* Lógica de Troca de Tela */}
      {tela === 'home' ? (
        // --- PÁGINA INICIAL ---
        <div className="home-content">
          <h1>🚀 Guia de Estudos React</h1>
          <p>Selecione um tópico para praticar:</p>
          
          <div className="grid-container">
            <button onClick={() => setTela('exercicios')} className="card-btn">
              <h3>Hook: useState</h3>
              <p>Praticar useState, contadores e listas etc ...</p>
            </button>

            <button disabled className="card-btn" style={{ opacity: 0.5 }}>
              <h3>Hook: useContext (Bloqueado)</h3>
              <p>Em breve...</p>
            </button>

            <button disabled className="card-btn" style={{ opacity: 0.5 }}>
              <h3>React Router (v6+) (Bloqueado)</h3>
              <p>Em breve...</p>
            </button>

            <button disabled className="card-btn" style={{ opacity: 0.5 }}>
              <h3>useRef, useMemo e useCallback (Bloqueado)</h3>
              <p>Em breve...</p>
            </button>

            <button disabled className="card-btn" style={{ opacity: 0.5 }}>
              <h3>useForm, useAuth (Bloqueado)</h3>
              <p>Em breve...</p>
            </button>
          </div>
        </div>
      ) : (
        // --- PÁGINA DE EXERCÍCIOS ---
        <PageEXS voltar={() => setTela('home')} />
      )}
    </div>
  );
}