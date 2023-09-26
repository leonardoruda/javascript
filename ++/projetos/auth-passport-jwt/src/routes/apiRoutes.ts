import { Router, Request, Response } from "express";
import { privateRoute } from "../config/passport";
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);

router.post('/register', apiController.register);
router.post('/login', apiController.login);

router.get('/list', privateRoute, apiController.list);


export default router;