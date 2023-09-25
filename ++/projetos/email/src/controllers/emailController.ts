import { Request, Response } from "express";
import nodemailer from 'nodemailer';

export const contato = async (req:Request, res:Response) => {
    //1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "a470987debb30a",
            pass: "06d30981a9a295"
        }
    });
    // 2: configurar a mensagem
    let message = {
        from: 'Ivan Drago <ivan-drago@gmail.com>',
        to: 'curtisjamesjackson187@gmail.com',
        replyTo: req.body.from,
        subject: req.body.subject, //'Título do email',
        html: req.body.email, //'Opa <strong>Teste</strong>, como vai?',
        text: req.body.email, //'Opa Teste, como vai?'
    }
    // 3: enviar a msg
    let info = await transport.sendMail(message);

    res.json({info});
}