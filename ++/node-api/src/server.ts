import express, { Request, Response } from 'express';
import path from 'path';
import apiRoutes from './routes/api';
import cors from 'cors';
require('dotenv').config();

const server = express();
server.use(cors({
    origin: '*'
}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use('/api', apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT, () => {
    console.log('Server on');
});