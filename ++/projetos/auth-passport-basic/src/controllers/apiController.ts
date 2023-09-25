import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/User";
require('dotenv').config();

export const ping = (req:Request, res:Response) => {
    res.status(200).json({pong: true});
}

export const register = async (req:Request, res:Response) => {
    if(req.body.email && req.body.password) {
        let {email, password} = req.body;

        let hasUser = await User.findOne({where: {email}});

        if(!hasUser) {
            let newUser = await User.create({email, password});

            const token = jwt.sign(
                {id: newUser.id, email: newUser.email},
                process.env.JWT_SECRET_KEY as string,
                {expiresIn: '2h'}
            )

            res.status(201).json({'Novo usuário criado: ': newUser.id, token});
            return;
        } else {
            res.json({error: 'E-mail já cadastrado!'});
            return;
        }
    }

    res.status(404).json({error: 'E-mail ou senha não enviados'});
}

export const login = async (req:Request, res:Response) => {
    res.json({status: true, user: req.user});
}

export const list = async (req:Request, res:Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for (let i in users) {
        list.push(users[i].email);
    }

    res.json({list});
}