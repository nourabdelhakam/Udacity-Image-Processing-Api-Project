import express, { Response } from 'express';
import routes from './routes/index';

const app = express();
const port = 3003;

app.use('/api', routes);

app.get('/', (_, res: Response): void => {
  res.status(200).send('Server working!');
});

app.listen(port, (): void => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
