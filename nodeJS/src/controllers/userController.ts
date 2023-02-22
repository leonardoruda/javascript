import User from "../models/User";
import {Request, Response} from 'express';

export const addUser = async (req: Request, res: Response) => {
    let name = req.body.name as string;
    let surname = req.body.surname as string;
    let email = req.body.email as string;
    let age = parseInt(req.body.age as string);
    let interests = req.body.interests.split(',');

    let usu = new User();
    if (name && age && email) {
        usu.name = {firstName: name, lastName: surname};
        usu.email = email;
        usu.age = age;
        if (interests.length > 0) {
            for (let i = 0; i < interests.length; i++) {
                usu.interests.push(interests[i]);
            };
        }
        await usu.save();
    } else {
        console.log('Erro em algum campo: ', name, age, email);
    }

    console.log('Usuário adicionado: ', usu);
    res.redirect('/');
}

export const maisAno = async (req: Request, res: Response) => {
    let id = req.params.id as string;
    let usu = await User.findById(id);
    if (usu) {
        let age = usu.age;
        age++;
        await User.findByIdAndUpdate(id, {age});
    }

    res.redirect('/');
}
export const menosAno = async (req: Request, res: Response) => {
    let id = req.params.id as string;
    let usu = await User.findById(id);
    if (usu) {
        let age = usu.age;
        age--;
        await User.findByIdAndUpdate(id, {age});
    }

    res.redirect('/');
}
export const excluir = async (req: Request, res: Response) => {
    let id = req.params.id as string;
    await User.findByIdAndDelete(id);

    res.redirect('/');
}