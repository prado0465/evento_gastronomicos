import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./style.css";

const eventosData = [
  {
    id: 1,
    imagem: 'https://images.sympla.com.br/670af7a73f02a-xs.jpg',
    titulo: 'Curso de Bolos Caseiros da Vovó Maria - Curso Online',
    data: '13 fev - 2025 • 19:00',
    local: 'Theatro Sete de Setembro, Penedo - AL',
  },
  {
    id: 2,
    imagem: 'https://images.sympla.com.br/671be4d68b11f-xs.jpg',
    titulo: 'Prepara Gastronomia Ibirité - SEBRAE / PREFEITURA',
    data: '08 nov - 2024 • 08:30',
    local: 'Prefeitura Municipal de Ibirité, Ibirité - MG',
  },
  {
    id: 3,
    imagem: 'https://images.sympla.com.br/66f598f89456b-xs.png',
    titulo: 'JANTAR FIM DE ANO - CONEXÃO EMPREENDEDOR DA EWS SCHOOL',
    data: '19 nov - 2024 • 19:00',
    local: 'EWS SCHOOL ESCOLA DE MARKETING DIGITAL, Curitiba - PR',
  },
  {
    id: 4,
    imagem: 'https://images.sympla.com.br/67237951828a9-xs.jpg',
    titulo: 'Café no Bosque',
    data: '28 nov - 2024 • 11:30 ',
    local: 'Bosque Park - Complexo Gastronômico e Cultural, Brasília - DF',
  },
  {
    id: 5,
    imagem: 'https://images.sympla.com.br/6711333be9df6-xs.jpg',
    titulo: 'FEIRA DE COMIDA TIPICA JAPONESA',
    data: '10 nov - 2024 • 11:00 ',
    local: 'AMCNB-Belo Horizonte, MG',
  },
  {
    id: 6,
    imagem: 'https://images.sympla.com.br/671b9b5385868-xs.jpg',
    titulo: 'Settimana della Cucina Italiana nel Mondo apresenta',
    data: '27 nov - 2024 • 18:30 ',
    local: 'Istituto Italiano di Cultura di Rio de Janeiro, Rio de Janeiro - RJ',
  },
  {
    id: 7,
    imagem: 'https://images.sympla.com.br/67167638f0ea7-xs.png',
    titulo: 'Super Chefinhos - Férias',
    data: '16 dez - 2024 • 08:00 ',
    local: 'Anciã - Cafeteria & Culinária Afetiva, Belo Horizonte - MG',
  },
  {
    id: 8,
    imagem: 'https://images.sympla.com.br/67228cc780cfd-xs.jpg',
    titulo: 'Hamburgueria',
    data: '25 nov - 2024 • 13:00',
    local: 'Diniz Foods, Louveira - SP',
  },
  {
    id: 9,
    imagem: 'https://images.sympla.com.br/6719503b8a940-xs.jpg',
    titulo: 'Festival do Sake "Masterclass Harmonização de Sake e Comida" Yuta Ido e Satoru Mikoshiba',
    data: '07 nov - 2024 • 14:00 ',
    local: 'Japan House São Paulo, São Paulo - SP',
  },
];

function Home() {
  const [filtro, setFiltro] = useState('');

  const eventosFiltrados = eventosData.filter(evento =>
    evento.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Bem-vindo ao sistema de Eventos Gastronômicos</h1>
      <p>Escolha uma opção de menu para começar.</p>

      <div className="eventos-container">
        <aside className="filtro-container">
          <h2>Filtros</h2>
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
                
                <Link className='esqueceu_4' to={`/event/${evento.id}`}>Ver detalhes</Link>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Home;