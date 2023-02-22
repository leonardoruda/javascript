import {Request, Response} from 'express';
import { Op } from 'sequelize';
import User from '../models/User';
import Products, { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {    
    await User.updateMany(
        {age: {$lt: 18}},
        {age: 18}
    );
    await User.updateOne(
        {'name.firstName': 'André'},
        { age: 17}
    );    
    
    let users = await User.find({}).sort({'name.firstName': 1});
    
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(50);

    res.render('pages/home', {
        products: list,
        expensives: expensiveList,
        frases: [
            'A mão suada é suave, a mão seca é severa',
            'Non vi si pensa quanto sangue costa!',
            'Fortis Fortuna Adiuvat'
        ], users
    });
}