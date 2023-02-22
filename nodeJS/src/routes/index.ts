import { Router } from 'express';
import {home} from '../controllers/homeController';
import * as UserController from '../controllers/userController';
import * as infoController from '../controllers/infoController';

const router = Router();

router.get('/', home);
router.post('/novousuario', UserController.addUser);

router.get('/maisano:id', UserController.maisAno);
router.get('/menosano:id', UserController.menosAno);
router.get('/excluir:id', UserController.excluir);

router.get('/contato', infoController.contato);

router.get('/sobre', infoController.sobre);

export default router;
