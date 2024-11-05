import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./style.css";

const events = [
  {
    id: 1,
    name: 'Curso de Bolos Caseiros da Vovó Maria',
    description: 'Descubra os segredos dos bolos...',
    location: {
      name: 'Theatro Sete de Setembro',
      address: 'Avenida Floriano Peixoto, 61, Penedo, Centro Histórico, AL',
      mapLink: 'https://maps.google.com/?q=Avenida+Floriano+Peixoto,+61,+Penedo,+AL'
    },
    date: '13 fev - 2025',
    time: '19:00',
    producer: 'José Silva',
    image: 'https://images.sympla.com.br/670af7a73f02a-xs.jpg'
  },
  {
    id: 2,
    name: 'Prepara Gastronomia Ibirité',
    description: 'Descubra os segredos da Gatronomia...',
    location: {
      name: 'Prefeitura',
      address: 'R. Arthur Campos, 906 - Alvorada, Ibirité - MG,',
      mapLink: 'https://maps.app.goo.gl/ymQrmWzRtNELcZaT6'
    },
    date: '08 nov - 2024',
    time: '08:30',
    producer: 'Nerso Pereira',
    image: 'https://images.sympla.com.br/671be4d68b11f-xs.jpg'
  },
  {
    id: 3,
    name: 'JANTAR FIM DE ANO',
    description: 'Venha comemorar seu fim de ano com a gente...',
    location: {
      name: 'Escola técnica com aprendizagem profissional',
      address: 'Av. Cândido de Abreu, 381 - Centro Cívico, Curitiba - PR,',
      mapLink: 'https://maps.app.goo.gl/uVa9r2ZxdEQLtKcj7'
    },
    date: '19 nov - 2024',
    time: '19:00',
    producer: 'KiKa Oliveira',
    image: 'https://images.sympla.com.br/66f598f89456b-xs.png'
  },
  {
    id: 4,
    name: 'Café no Bosque',
    description: 'Venha conhecer nosso lugar...',
    location: {
      name: 'Restaurante',
      address: 'ST SHLN, SQN 316 comercial da, BL A Proximo a - Asa Norte, Brasília - DF,',
      mapLink: 'https://maps.app.goo.gl/qetsD4mZ83Z3B4ek8'
    },
    date: '28 nov - 2024',
    time: '11:30',
    producer: 'KiKa Oliveira',
    image: 'https://images.sympla.com.br/67237951828a9-xs.jpg'
  },
  {
    id: 5,
    name: 'FEIRA DE COMIDA TIPICA JAPONESA',
    description: 'Venha comemorar seu fim de ano com a gente...',
    location: {
      name: 'Associação / organização',
      address: 'R. Dom Lourenço de Almeida, 535 - Nova Cachoeirinha, Belo Horizonte - MG,',
      mapLink: 'https://maps.app.goo.gl/iqsCAvyLtaSaV6zc9'
    },
    date: '10 nov - 2024',
    time: '11:00',
    producer: 'KiKa Oliveira',
    image: 'https://images.sympla.com.br/6711333be9df6-xs.jpg'
  },
  {
    id: 6,
    name: 'Settimana della Cucina Italiana nel Mondo apresenta',
    description: 'Venha comemorar seu fim de ano com a gente...',
    location: {
      name: 'Centro cultural',
      address: 'Cobertura - Edifício Comercial Brasil Estados Unidos, Av. Nossa Sra. de Copacabana, 690 - Copacabana, Rio de Janeiro - RJ,',
      mapLink: 'https://maps.app.goo.gl/syNweUDx7qKs75Gr7'
    },
    date: '27 nov - 2024',
    time: '18:30',
    producer: 'KiKa Oliveira',
    image: 'https://images.sympla.com.br/671b9b5385868-xs.jpg'
  },
  {
    id: 7,
    name: 'Super Chefinhos - Férias',
    description: 'Venha comemorar seu fim de ano com a gente...',
    location: {
      name: 'Cafeteria',
      address: 'R. Paulista, 931 - Fernão Dias, Belo Horizonte - MG,',
      mapLink: 'https://maps.app.goo.gl/qfTro5ifRsDx5Ao18'
    },
    date: '16 dez - 2024',
    time: '08:00',
    producer: 'KiKa Oliveira',
    image: 'https://images.sympla.com.br/67167638f0ea7-xs.png'
  },
  {
    id: 8,
    name: 'Hamburgueria',
    description: 'Venha comemorar seu fim de ano com a gente...',
    location: {
      name: 'Atacadista',
      address: 'Av. Silvério Finamore, 1860 - Leitão, Louveira - SP,',
      mapLink: 'https://maps.app.goo.gl/of7QUh5Fiyo1uw8T6'
    },
    date: '25 nov - 2024',
    time: '13:00',
    producer: 'KiKa Oliveira',
    image: 'https://images.sympla.com.br/67228cc780cfd-xs.jpg'
  },
  {
    id: 9,
    name: 'Festival do Sake "Masterclass Harmonização de Sake e Comida" Yuta Ido e Satoru Mikoshiba',
    description: 'Venha comemorar seu fim de ano com a gente...',
    location: {
      name: 'Centro cultural',
      address: 'Av. Paulista, 52 - Bela Vista, São Paulo - SP,',
      mapLink: 'https://maps.app.goo.gl/m9hUNYXKtETYuxXy9'
    },
    date: '07 nov - 2024',
    time: '14:00',
    producer: 'KiKa Oliveira',
    image: 'https://images.sympla.com.br/6719503b8a940-xs.jpg'
  }
];

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <p>Evento não encontrado</p>;
  }

  const handleLoginClick = (e) => {
    e.preventDefault(); 
    setLoginSuccess(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="event-detail container">
      <h1>{event.name}</h1>
      <img src={event.image} alt={event.name} className="event-image" />
      <p>{event.description}</p>
      <p><strong>Local:</strong> {event.location.name}</p>
      <p><strong>Endereço:</strong> {event.location.address}</p>
      <a href={event.location.mapLink} target="_blank" rel="noopener noreferrer">Ver no mapa</a>
      <p><strong>Data e Hora:</strong> {event.date} - {event.time}</p>
      <p><strong>Sobre o produtor:</strong> {event.producer}</p>
      <button>Comprar Ingressos</button>
      <button className="esqueceu_3" type="button" onClick={handleLoginClick}>Voltar</button>
    </div>
  );
}

export default EventDetail;
