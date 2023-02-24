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