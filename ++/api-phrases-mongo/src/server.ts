import express, {Request, Response} from 'express';
import path from 'path';
import Routes from './routes/api-routes';
import cors from 'cors';
import {mongoConnect} from './database/mongo';
require('dotenv').config();

const server = express();
mongoConnect();
server.use(cors({origin: '*'}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use('/api', Routes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Endpoint não encontrado!');
})

server.listen(process.env.PORT || 3333, () => {
    console.log('Server on');
})