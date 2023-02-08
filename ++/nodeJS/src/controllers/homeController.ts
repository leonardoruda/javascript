import {Request, Response} from 'express';
import { Op } from 'sequelize';
import { User } from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {
        
    let users = await User.findAll({
        order: [['username', 'ASC']]
    });

    let age: number = 25;
    let oldEnough: boolean = false;
    if (age >= 18) {
        oldEnough = true;
    }
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(50);
    res.render('pages/home', {
        name: 'Leonardo',
        showWelcome: true,
        age,
        oldEnough,
        products: list,
        expensives: expensiveList,
        frases: [
            'A mão suada é suave, a mão seca é severa',
            'Non vi si pensa quanto sangue costa!'
        ], users
    });
}

export const newUser = async (req: Request, res: Response) => {
    let name: string = '';
    let age: number = 0;

    if(req.body.name && req.body.age) {
        name = req.body.name as string;
        const user = User.build({username: name});
        if (req.body.age) {
            user.age = parseInt(req.body.age as string);
        }
        await user.save();
    }
    
    req.body.name = false;
    res.redirect('/');
}