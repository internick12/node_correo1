const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async(req, res) =>{
    const {name, email, phone, message} = req.body;
    contentHTML = `
        <h1>User Information</h1>
        <hr>
        <ul>
            <li>User Name: ${name}</li>
            <li>User Email: ${email}</li>
            <li>User Phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'mail.galosoft.com',
        port: 587,
        secure: false,
        auth: {
            user: 'gerencia@galosoft.com',
            pass: 'Mibruno10@'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: 'gerencia@galosoft.com',
        to: 'internick10@gmail.com',
        subject: 'correo de prueba',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);
    res.redirect('success.html');
});

module.exports = router;