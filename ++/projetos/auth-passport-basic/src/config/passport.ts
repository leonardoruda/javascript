import passport from "passport";
import { BasicStrategy } from "passport-http";
import { Request, Response, NextFunction } from "express";
import { User, UserInstance } from "../models/User";

const unauthorizedJson = {status: 401, message: 'Não autorizado'};

//Esta f. tem o mesmo funcionamento do basic auth (vide ++/projetos/auth), e usa-se hash codificada no formato base64 também
passport.use(new BasicStrategy(async (email, password, done) => {
    if(email && password) {
        const user = await User.findOne({
            where: {email, password}
        });

        if(user) {
            return done(null, user);
        }
    }

    return done(unauthorizedJson, null);
}));

//Esta middleware f. é executada ao acessar uma rota (/login ou /list); ela inicia chamando o método auth do passport c/ o parâmetro basic, definido acima (passport.use), o qual retorna um resultado s/ erro e c/ user, caso este seja encontrado, ou um erro (unauthorizedJson) s/ user; então é executada a callback do authenticate, que tem acesso ao user, de modo que faz a verificação: caso haja user, passa p/ a f. do controller, senão, esta é chamada c/ o erro retornado, remetendo-nos ao errorHandler do server, c/ o caso específico (err.message = 'Não autorizado")//
export const privateRoute = (req:Request, res:Response, next:NextFunction) => {
    passport.authenticate('basic', (err: Error, user: UserInstance) => {
        req.user = user; //faz-se necessário p/ que a next (nesse caso /login) tenha acesso e possa exibir o user! OBS: deste modo, ao invés de precisar de um body com email e senha, a req login usa headers assim como a list...
        return user ? next() : next(unauthorizedJson);
    })(req, res, next); //Formato p/ chamar uma f. auto-executória, ie, é executada assim que inicializada!
}

export default passport;