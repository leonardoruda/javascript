import { unlink } from 'fs/promises';
import {Request, Response} from 'express';
import sharp from 'sharp';

export const uploadFile = async (req:Request, res:Response) => {
    // const files = req.files as { [fieldName: string]: Express.Multer.File[]}; — opção mais simples, caso não precise filtrar tipos do TS; alternativamente:

    // type UploadTypes = {
    //     avatar: Express.Multer.File[],
    //     gallery: Express.Multer.File[]
    // };

    // const files = req.files as UploadTypes;

    // console.log('AVATAR: ', files.avatar);
    // console.log('GALLERY: ', files.gallery);

    if(req.file) {
        const filename = `${req.file.filename}.jpg`;

        //o resize recebe width, height e options
        await sharp(req.file.path).resize(300, 300, {
        // fit: sharp.fit.cover,
        // position: 'bottom'
        })
        // formata o arquivo c/ o sufixo:
        .toFormat('jpeg')
        // aproveita o nome gerado pelo multer:
        .toFile(`./public/media/${filename}`);

        // remove o link de tmp sem afetar o arq ou o dir dest:
        await unlink(req.file.path);

        res.json({image: `${filename}`});
    } else {
        res.status(400).json({error: 'Formato de arquivo inválido!'});
    }
}
