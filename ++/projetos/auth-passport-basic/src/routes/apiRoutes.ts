import { Router, Request, Response } from "express";
import { privateRoute } from "../config/passport";
import * as apiController from '../controllers/apiController';
import * as emailController from '../controllers/emailController';

const router = Router();

router.get('/ping', apiController.ping);

router.post('/register', apiController.register);
router.post('/login', privateRoute, apiController.login);

router.get('/list', privateRoute, apiController.list);

router.post('/contato', emailController.contato);


export default router;