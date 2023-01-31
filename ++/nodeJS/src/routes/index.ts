import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Olá, Mundo!')
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de Contato: ')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre a empresa...')
})

export default router;
