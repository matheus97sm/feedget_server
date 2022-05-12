import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c127d274f3e1b2',
    pass: '547d96eebf61db',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  // eslint-disable-next-line class-methods-use-this
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe FeedGet <oi@feedget.com>',
      to: 'Matheus Fonseca <matheus97sm@gmail.com>',
      subject,
      html: body,
    });
  }
}
