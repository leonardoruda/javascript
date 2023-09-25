import { Request, Response, NextFunction }from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
require('dotenv').config();

export const Auth = {
    private: async (req:Request, res:Response, next: NextFunction) => {
        let success = false;

        if(req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' ');

            if(authType === 'Bearer') {
                try {
                    const decoded = jwt.verify(
                    token,
                    process.env.JWT_SECRET_KEY as string
                    );
                    success = true;
                    console.log('DECODED:', decoded);
                } catch (error) {
                    // Deixe vazio, ou erros no console interromperão a aplicação!
                }
            }
        }

        if(success) {
            next();
        } else {
            res.status(403); //Not authorized
            res.json({error: 'Não autorizado'});
        }
    }
}