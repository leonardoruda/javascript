import {Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
    let n: number = Math.floor(Math.random() * 10);

    res.json({n});
}

export const name = (req: Request, res: Response) => {
    let name = req.params.nome as string;

    res.json({name});
}

export const create = async (req: Request, res: Response) => {
    let {author, txt} = req.body;

    let phrase = await Phrase.create({author, txt});
    res.status(201);
    res.json({process: 'A seguinte frase foi criada:', phrase});
}

export const list = async (req: Request, res: Response) => {
    let list = await Phrase.findAll({order: ['id']});
    res.json({process: 'A consulta encontrou as seguintes frases:', list})
}

export const getPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findByPk(req.params.id);
    if (phrase) {
        res.json({process: 'A consulta encontrou a seguinte frase:', phrase})
    } else {
        res.json({error: 'Frase não encontrada!'});
    }
    
}

export const update = async (req: Request, res: Response) => {
    let {id} = req.params;
    let {author, txt} = req.body;

    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();

        res.json({process: 'A seguinte frase foi alterada:', phrase});
    } else {
        res.json({error: 'Frase não encontrada!'});
    }
}

export const del = async (req: Request, res: Response) => {
    let {id} = req.params;

    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        phrase.destroy();

        res.json({process: 'A seguinte frase foi excluída:', phrase: phrase.txt});
    } else {
        res.json({error: 'Frase não encontrada!'});
    }
}

export const randomPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [
            require('sequelize').Sequelize.fn('RANDOM')
        ]
    });

    res.json({phrase});
}