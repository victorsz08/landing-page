import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!,
});

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_MERCADOPAGO_ACCESS_TOKEN!,
});

const preference = new Preference(client);

export type PaymentDataType = {
  items: {
    title: string;
    quantity: number;
    unit_price: number;
    currency_id: string;
  }[];
  total_amount: number;
  notification_url: string;
  back_urls: {
    success: string;
    failure: string;
    pending: string;
  };
  auto_return: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { item, email, name } = body;

    const recipients = [new Recipient(email, name)];
    const senderEmail = "seu_nome@test-68zxl279qne4j905.mlsender.net"; // Substitua pelo seu email verificado
    const senderName = "Nome da sua loja"; // Ou use o nome do cliente, se apropriado
    const sentFrom = new Sender(senderEmail, senderName);

    const preferenceResult = await preference.create({
      body: {
        items: [
          {
            id: "1",
            title: item.title,
            quantity: 1,
            unit_price: item.amount,
            currency_id: "BRL",
          },
        ],
      },
    });

    console.log("Preferência criada:", preferenceResult);

    const personalization = [
      {
        email: email,
        data: {
          date: new Date().toISOString(),
          name: name,
          preference_id: preferenceResult.id,
          support_email: "suporte@email.com",
          total_billing: item.amount.toString(),
        },
      },
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("Pedido Recebido")
      .setTemplateId("zr6ke4n807v4on12")
      .setPersonalization(personalization);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ init_point: preferenceResult.init_point });
  } catch (error: any) {
    console.error("Erro ao criar preferência de pagamento");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
