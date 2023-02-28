import {Router} from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.name);

router.post('/frases', ApiController.create);
router.get('/frases', ApiController.list);
router.get('/frases/:id', ApiController.getPhrase);
router.put('/frases/:id', ApiController.update);
router.delete('/frases/:id', ApiController.del);
router.get('/frase-do-dia', ApiController.randomPhrase);

export default router;