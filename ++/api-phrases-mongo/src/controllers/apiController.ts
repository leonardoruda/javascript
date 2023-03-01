import { Request, Response } from 'express';
import Phrase from '../models/Phrase';

export const createPhrase = async (req: Request, res: Response) => {
    let {author, txt} = req.body;

    let phrase = await Phrase.create({author, txt});

    res.json({process: 'Foi criada a seguinte frase:', phrase: phrase.txt});
}

export const getAll = async (req: Request, res: Response) => {
    let phrases = await Phrase.find({}).sort({id: 1});

    res.json({process: `A pesquisa retornou os seguintes ${phrases.length} resultados:`, phrases});
}

export const getOne = async (req: Request, res: Response) => {
    let {id} = req.params;
    let phrase = await Phrase.findById(id);

    if (phrase) {
        res.json({process: 'A consulta encontrou a seguinte frase:', phrase: phrase.txt});
    } else {
        res.json({error: 'Frase não encontrada!'});
    }
}

export const updatePhrase = async (req: Request, res: Response) => {
    let {id} = req.params;
    let phrase = await Phrase.findOneAndUpdate({id}, {txt: req.body.txt});

    if (phrase) {
        res.json({process: 'A seguinte frase foi alterada:', phrase});
    } else {
        res.json({error: 'Frase não encontrada!'});
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let {id} = req.params;
    let phrase = await Phrase.findByIdAndDelete(id);

    res.json({process: 'A seguinte frase foi excluída:', phrase});
}
