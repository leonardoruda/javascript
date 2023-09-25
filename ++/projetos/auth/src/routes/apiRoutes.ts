import { Router, Request, Response } from "express";
import { Auth } from '../middlewares/auth';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);

router.post('/register', apiController.register);
router.post('/login', apiController.login);

router.get('/list', Auth.private, apiController.list);

export default router;