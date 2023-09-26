import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/User";
import { generateToken } from "../config/passport";
require('dotenv').config();

export const ping = (req:Request, res:Response) => {
    res.status(200).json({pong: true});
}

//Quando um usuário é cadastrado ou faz login, ele recebe um token que o identificará durante sua sessão
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
    if(req.body.email && req.body.password) {
        let {email, password} = req.body;
        let user = await User.findOne({where: {email, password}});

        if(user) {
            const token = generateToken({id: user.id}); //this process is the same as the /register jwt.sign, just defined on the passport.ts according to organizing principles
            res.json({status: true, token});
            return;
        }
    }
    res.json({error: 'E-mail ou senha não enviados!'});
}

export const list = async (req:Request, res:Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for (let i in users) {
        list.push(users[i].email);
    }

    res.json({list});
}