import { Router } from "express";
import * as TodoController from '../controllers/todoController';
import multer from "multer";

const router = Router();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp');
    },
    filename: (req, file, cb) => {
        // cb(null, file.fieldname+'.jpg'); — arq estático, sempre recebe o mesmo nome/soprepõe

        let randomName = Math.floor(Math.random() * 99999);
        cb(null, `${randomName+Date.now()}.jpg`);
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

router.get('/todo', TodoController.all);
router.post('/todo', TodoController.add);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove);

router.post('/api/upload', simpleUpload.single('avatar'), TodoController.uploadFile);
// router.post('/api/upload', upload.array('avatars', 2), TodoController.uploadFile);
// router.post('/api/upload', upload.fields([
//     {name: 'avatar', maxCount: 1},
//     {name: 'gallery', maxCount: 3}
// ]), TodoController.uploadFile);

export default router;