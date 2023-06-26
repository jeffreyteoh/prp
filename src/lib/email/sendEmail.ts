import transporter, {mailOptions} from './nodeMailer';
import path from 'path';
const hbs = require('nodemailer-express-handlebars');

const templateDir = path.resolve( "./public/template/");

interface Data {
    email?: string;
    subject?: string;
    message?: string;
    html?: string;
    template?: string;
    context?: object;
}

const handlebarOptions = {
    viewEngine: {
        extName: '.html',
        partialsDir: templateDir,
        defaultLayout: false,
    },
    viewPath: templateDir,
    extName: '.html'
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))

const sendEmail = async (data: Data) => {
    const {from, to} = mailOptions;

    await transporter.sendMail({
        from: from,
        to: data.email ||  to,
        subject: data.subject,
        text: data.message,
        html: data.html,
        template: data.template,
        context: data.context
    });
}

export default sendEmail;