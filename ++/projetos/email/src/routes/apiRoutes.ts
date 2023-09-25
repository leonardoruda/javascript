import { Router, Request, Response } from "express";
import * as apiController from '../controllers/apiController';
import * as emailController from '../controllers/emailController';

const router = Router();

router.get('/ping', apiController.ping);

router.post('/contato', emailController.contato);


export default router;