import express from 'express';
import cors from 'cors';
import lightRoutes from './routes/lightRoutes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', lightRoutes);

export default app;