import React, { useState } from 'react';
import "./style.css";

const eventosData = [
  {
    id: 1,
    imagem: 'https://images.sympla.com.br/670af7a73f02a-xs.jpg',
    titulo: 'Feira Gastronômica de Verão',
    data: '12/11/2024',
    local: 'Parque da Cidade',
  },
  {
    id: 2,
    imagem: 'https://images.sympla.com.br/671be4d68b11f-xs.jpg',
    titulo: 'Festival de Comida Nordestina',
    data: '15/12/2024',
    local: 'Centro de Convenções',
  },
  {
    id: 3,
    imagem: 'https://images.sympla.com.br/66f598f89456b-xs.png',
    titulo: 'Feira Gastronômica de Verão',
    data: '12/11/2024',
    local: 'Parque da Cidade',
  },
  {
    id: 4,
    imagem: 'https://images.sympla.com.br/67237951828a9-xs.jpg',
    titulo: 'Festival de Comida Nordestina',
    data: '15/12/2024',
    local: 'Centro de Convenções',
  },
  {
    id: 5,
    imagem: 'https://images.sympla.com.br/671b9b5385868-xs.jpg',
    titulo: 'Feira Gastronômica de Verão',
    data: '12/11/2024',
    local: 'Parque da Cidade',
  },
  {
    id: 6,
    imagem: 'https://images.sympla.com.br/6711333be9df6-xs.jpg',
    titulo: 'Festival de Comida Nordestina',
    data: '15/12/2024',
    local: 'Centro de Convenções',
  },

];

const CadastroEventos = () => {
  const [filtro, setFiltro] = useState('');

  const eventosFiltrados = eventosData.filter(evento =>
    evento.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="eventos-container">
      <aside className="filtro-container">
        <h2>Filtros</h2>
        <hr />
        <input
          type="text"
          placeholder="Buscar por evento"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />

      </aside>
      <main className="eventos-lista">
        {eventosFiltrados.map((evento) => (
          <div key={evento.id} className="evento-card">
            <img src={evento.imagem} alt={evento.titulo} />
            <div className="evento-info">
              <h3>{evento.titulo}</h3>
              <p>{evento.data}</p>
              <p>{evento.local}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CadastroEventos;
