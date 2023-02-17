import { sequelize } from "../instances/postgres";
import { Request, Response } from "express";
import { User } from "../models/User";

export const home = (async (req: Request, res: Response) => {
    //await User.update({name: 'Rodrigo Rodrigues'}, {where: {id: 18}})
    
    let users = await User.findAll({order: ['name']});

    res.render('pages/home', {
        users
    });
})

export const newUser = (async (req: Request, res: Response) => {
    let name: string = req.body.name as string;
    let age: number = parseInt(req.body.age as string);
    if (name) {
        let usu = User.build({name});
        if (age) {
            usu.age = age;
        }
    usu.save();
    }

    res.redirect('/');
})

export const maisAno = (async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    let usu = await User.findByPk(id);
    if (usu) {
        usu.age++;
        usu.save();
    }
    
    res.redirect('/');
})

export const menosAno = (async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    let usu = await User.findOne({where: {id}});
    if (usu) {
        usu.age--;
        usu.save();
    }
    res.redirect('/');
})

export const excluir = (async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    await User.destroy({where: {id}});
    res.redirect('/');    
})