import { Router } from "express";
import * as FileController from '../controllers/filesController';
import multer from "multer";

const router = Router();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        // é uma convenção passar null como primeiro parâmetro nas callbacks p/ indicar que não houveram erros que interrompessem o processamento até este ponto!
        cb(null, './tmp');
    },
    filename: (req, file, cb) => {
        // cb(null, file.fieldname+'.jpg'); — arq estático, sempre recebe o mesmo nome/soprepõe

        let randomName = Date.now() + '-'+ Math.floor(Math.random() * 2e6); //* 2.000.000
        cb(null, `${randomName}.jpg`);
    }
})
const upload = multer({
    //storage: multer.memoryStorage() — dispensa o config, e salva o arq apenas na memória

    storage: storageConfig
});

//caso não precise manipular arqs, basta o exposto abaixo:
const simpleUpload = multer({
    dest: './tmp', //raíz do server, não do routes!
    fileFilter(req, file, callback) {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];

        callback(null, allowed.includes(file.mimetype));
    },
    limits: {fieldNameSize: 100, fieldSize: 2000000}
});

router.post('/api/upload', simpleUpload.single('avatar'), FileController.uploadFile);
// router.post('/api/upload', upload.array('avatars', 2), FileController.uploadFile);
// router.post('/api/upload', upload.fields([
//     {name: 'avatar', maxCount: 1},
//     {name: 'gallery', maxCount: 3}
// ]), FileController.uploadFile);

export default router;