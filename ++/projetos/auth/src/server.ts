import express, {Request, Response, ErrorRequestHandler} from 'express';
import path from 'path';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes';

require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use('/api', apiRoutes);

server.use((req: Request, res:Response) => {
    res.status(404).json({error: 'Rota não encontrada! Verifique o endereço e tente novamente...'});
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400);

    console.log(err);
    res.json('Ocorreu algum erro!');
}
server.use(errorHandler);

server.listen(process.env.PORT || 4000, () => console.log('Server running on port '+process.env.PORT));