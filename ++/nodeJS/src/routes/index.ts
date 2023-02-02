import { Router } from 'express';
import {home} from '../controllers/homeController';
import * as infoController from '../controllers/infoController';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', home);

router.get('/contato', infoController.contato);

router.get('/sobre', infoController.sobre);

router.get('/nome', userController.nome);

router.get('/idade', userController.idadeGet);

router.post('/idade-resultado', userController.idadePost);

export default router;
