import {Router} from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/frases', ApiController.createPhrase);
router.get('/frases', ApiController.getAll);
router.get('/frases/:id', ApiController.getOne);
router.put('/frases/:id', ApiController.updatePhrase);
router.delete('/frases/:id', ApiController.deletePhrase);

export default router;