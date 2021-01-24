import express from 'express';

const app = express();
app.get('/index', (request, response) => {
  response.send('API que retorna dados tributários da Lei da Transparência');
});

app.use(express.json())

export { app }