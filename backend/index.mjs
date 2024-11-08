import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import eventsRouter from './routes/events.mjs';

dotenv.config();  

const app = express();
app.use(express.json()); 


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Usando a rota de eventos
app.use('/api/events', eventsRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
