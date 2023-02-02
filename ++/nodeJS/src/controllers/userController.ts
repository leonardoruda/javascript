import {Request, Response} from 'express';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    res.render('pages/nome', {nome});
}

export const idadeGet = (req: Request, res: Response) => {
    res.render('pages/idade');
}

export const idadePost = (req: Request, res: Response) => {
    let idade: number = 0;
    if (req.body.ano) {
        let anoNasc: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNasc;
    }

    res.render('pages/idade', {idade});
}