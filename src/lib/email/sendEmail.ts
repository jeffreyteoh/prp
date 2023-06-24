import transporter, {mailOptions} from './nodeMailer';

interface Data {
    email?: string;
    subject?: string;
    message?: string;
    html?: string;
}

const sendEmail = async (data: Data) => {
    const {from, to} = mailOptions;

    try {
        await transporter.sendMail({
            from: from,
            to: data.email ||  to,
            subject: data.subject,
            text: data.message,
            html: data.html
        });
        
        return true;
    } catch (error) {
        console.log(error);

        return false;
    }
}

export default sendEmail;