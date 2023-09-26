import passport from "passport";
import jwt from 'jsonwebtoken';
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { Request, Response, NextFunction } from "express";
import { User, UserInstance } from "../models/User";

require('dotenv').config();

const unauthorizedJson = {status: 401, message: 'Unauthorized JSON'};
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//define onde os tokens serão enviados na requisição (header, body)
    secretOrKey: process.env.JWT_SECRET_KEY as string
}

//usa um modelo de estratégia, c/ opções e uma cllbck f que faz a verificação do jwt: o payload contém os dados tokenizados (acesso pelo header "Authentication"), e o done define se prosseguiremos c/ erro e s/ user ou s/ erro e c/ user
passport.use(new JWTStrategy(options, async (payload, done) => {
    const user = await User.findByPk(payload.id);

    if(user) {
        return done(null, user);
    } else {
        return done(unauthorizedJson, false);
    }
    
}));

export const generateToken = (data:object) => {
    return jwt.sign(
        data,
        process.env.JWT_SECRET_KEY as string,
        {expiresIn: '2h'}
    );
}

//immediately-invoked function expression p/ qualquer rota que receber o privateRoute, usa o método de autenticação de acordo com a estratégia definida acima (jwt), e a cllbck recebe um user, o qual é verificado e repassado, caso exista, senão retorna um erro específico
export const privateRoute = (req:Request, res:Response, next:NextFunction) => {
    passport.authenticate('jwt', (err: Error, user: UserInstance) => {
        req.user = user;
        return user? next() : next(unauthorizedJson);
    }) (req,res,next)
}

export default passport;