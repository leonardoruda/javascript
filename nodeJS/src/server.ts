import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import {mongoConnect} from './database/mongo';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();
require('dotenv').config();
mongoConnect();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use('', express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);
server.use('/painel', painelRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!')
});

 
server.listen(process.env.PORT);