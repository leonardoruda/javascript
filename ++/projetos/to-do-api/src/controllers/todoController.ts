import {Request, Response} from 'express';
import {Todo} from '../models/Todo';

export const all = async (req:Request, res:Response) => {
    const list = (await Todo.findAll({order: ['id']}));

    res.status(200).json({list});
};

export const add = async (req:Request, res:Response) => {
    if(req.body.title) {
        let task = await Todo.create({
            title: req.body.title,
            done: req.body.done? true : false
        });

        res.status(201).json({'Tarefa criada:': task});
    } else {
        res.json({error: 'Dados não enviados!'});
    }

};

export const update = async (req:Request, res:Response) => {
    const id: string = req.params.id;
    let task = await Todo.findByPk(id);

    if(task) {

        if(req.body.title) {
            task.title = req.body.title;
        }
        if(req.body.done) {
            switch(req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    task.done = true;
                break;
                case 'false':
                case '0':
                    task.done = false;
                break;
                default:
                    res.status(400).json({error: 'O parâmetro \'done\' não segue o padrão booleano \'true\' ou \'false\'!'});
                return;
            }

        }

        await task.save();
        res.status(200).json({'Item atualizado:': task});
        
    } else {
        res.status(400).json({error: 'Item não encontrado...'});
    }

};

export const remove = async (req:Request, res:Response) => {
    const id: string = req.params.id;

    let task = await Todo.findByPk(id);

    if(task) {
        await task.destroy();
    }

    res.json({'Item excluído:': task});
};


