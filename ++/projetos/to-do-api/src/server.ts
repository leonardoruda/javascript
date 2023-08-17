import express, {Request, Response, ErrorRequestHandler} from 'express';
import path from 'path';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes';

require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes);

server.use((req: Request, res:Response) => {
    res.status(404).json({error: 'Endpoint não encontrado! Verifique o endereço e tente novamente...'});
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(404);
    console.log(err);
    res.json('Ocorreu algum erro!');
}
server.use(errorHandler);

server.listen(process.env.PORT || 3000, () => console.log(`Server listening at port ${process.env.PORT}`));