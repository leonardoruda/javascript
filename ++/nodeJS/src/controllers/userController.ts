import {Request, Response} from 'express';
import { User } from '../models/User';

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

export const maisAno = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    let resul = await User.findAll({where: {id: id}});
    if (resul.length > 0) {
        let usu = resul[0];
        usu.age++;
        usu.save();
    }
    
    res.redirect('/');
}
export const menosAno = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    let usu = await User.findByPk(id);
    if (usu) {
        usu.age--;
        usu.save();
    }

    res.redirect('/');
}
export const excluir = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    await User.destroy({where: { id } });

    res.redirect('/');
}