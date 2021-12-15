import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../shared/App';

const app = express();

app.get('/', (req, res) => {
  res.send(
    ReactDOM.renderToString(App()),
  );
});

app.listen(3000, () => {
  console.log('Server started http://localhost:3000');
});
