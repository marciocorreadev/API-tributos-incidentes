import express from 'express';

const app = express();
app.get('/index', (request, response) => {
  response.send('API que retorna dados tributários da Lei datributários da Lei datributários da Lei datributários da Lei datributários da Lei datributários da Lei datributários da Lei da Transparência – Lei 12.741/2012.');
});

app.listen(3000);
