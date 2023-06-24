import nodeMailer from 'nodemailer';

const email = process.env.MAIL_USER;

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: process.env.MAIL_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

export default transporter;
