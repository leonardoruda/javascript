import { Router } from 'express';
import { home, newUser, maisAno, menosAno, excluir } from '../controllers/home';

const router = Router();

router.get('/', home);
router.post('/novousuario', newUser);
router.get('/usuario:id/mais', maisAno);
router.get('/usuario:id/menos', menosAno);
router.get('/usuario:id/excluir', excluir);

export default router;