import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O servidor está sendo executado em: http://localhost:${port}`);
});