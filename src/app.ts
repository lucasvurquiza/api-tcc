import express from 'express';
import lightRoutes from './routes/lightRoutes';

const app = express();

app.use(express.json());

app.use('/', lightRoutes);

export default app;