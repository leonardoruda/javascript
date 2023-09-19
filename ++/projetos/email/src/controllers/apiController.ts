import { Request, Response } from "express";
import { User } from "../models/User";

export const ping = (req:Request, res:Response) => {
    res.status(200).json({pong: true});
}

export const register = async (req:Request, res:Response) => {
    if(req.body.email && req.body.password) {
        let {email, password} = req.body;

        let hasUser = await User.findOne({where: {email}});

        if(!hasUser) {
            let newUser = await User.create({email, password});

            res.status(201).json({'Novo usuário criado: ': newUser.id});
            return;
        } else {
            res.json({error: 'E-mail já cadastrado!'});
            return;
        }
    }

    res.status(404).json({error: 'E-mail ou senha não enviados'});
}

export const login = async (req:Request, res:Response) => {
    if(req.body.email && req.body.password) {
        let {email, password} = req.body;

        let user = await User.findOne({where: {email, password}});

        if(user) {
            res.json({status: true});
            return;
        }
    }

    res.json({status: false});
}

export const list = async (req:Request, res:Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for (let i in users) {
        list.push(users[i].email);
    }

    res.json({list});
}