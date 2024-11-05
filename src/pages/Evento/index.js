import { useNavigate } from 'react-router-dom';

function Eventos({ eventos }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/evento/${id}`);
  };

  return (
    <div>
      {eventos.map((evento) => (
        <div key={evento.id} onClick={() => handleClick(evento.id)}>
          <h2>{evento.nome}</h2>
          <p>{evento.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default Eventos;
