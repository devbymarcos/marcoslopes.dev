import { NextRequest, NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(request) {
  const req = await request.json();

  const mailerSend = new MailerSend({
    apiKey: process.env.API_KEY,
  });

  const sentFrom = new Sender("noreplay@marcoslopes.dev", "Site");

  const recipients = [new Recipient("marcoslopes.dev@gmail.com", "Marcos")];

  const htmlTemplate = `<h2>Mensagem do site</h2>
    <p style="font-size:1.2rem">Nome : ${req.name}</p>
    <p style="font-size:1.2rem">Email : ${req.email}</p>
    <p style="font-size:1.2rem">Mensagem : ${req.message}</p><br/>
  `;

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Contato do site")
    .setHtml(htmlTemplate)
    .setText(req.message);

  const send = await mailerSend.email.send(emailParams);

  if (send.statusCode === 202) {
    return NextResponse.json({
      message: "Ok! seu contato foi enviado com sucesso",
      type: "success",
    });
  } else {
    return NextResponse.json({
      message: "Opps!! algo deu errado",
      type: "error",
    });
  }
}
