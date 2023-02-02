import {Request, Response} from 'express';
import { Product } from '../models/Product';

export const home = (req: Request, res: Response) => {
    let age: number = 25;
    let oldEnough: boolean = false;
    if (age >= 18) {
        oldEnough = true;
    }
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(50);

    res.render('pages/home', {
        name: 'Leonardo',
        age,
        showWelcome: true,
        oldEnough,
        products: list,
        expensives: expensiveList,
        frases: [
            'A mão suada é suave, a mão seca é severa',
            'Non vi si pensa quanto sangue costa!'
        ]
    });
}