import nodemailer from "nodemailer";
interface EmailOption {
  to: string;
  subject: string;
  html: string;
}
const smtpEmail = process.env.SMTP_USER;
const defaultFrom = `contact us <${smtpEmail}>`;
export const sendMail = async (option: EmailOption) => {
  const transporter = nodemailer.createTransport({
    secure: true,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  try {
    await transporter.sendMail({ from: defaultFrom, ...option });
  } catch (error) {
    console.log(error);
  }
};
