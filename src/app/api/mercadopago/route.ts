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
  item: {
    title: string;
    quantity: number;
    unit_price: number;
    currency_id: string;
  };
  metadata: {
    customerEmail: string;
    customerName: string;
    customerPlanName: string;
  }
  auto_return: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { item, metadata } = body;
    const notificationUrl = "https://webhook.site/0b313d0b-976e-4609-934d-e7bd317de7f8"


    const recipients = [new Recipient(metadata.customerEmail, metadata.customerName)];
    const senderEmail = "email@test-68zxl279qne4j905.mlsender.net";
    const senderName = "Geraldo Neto Treinador";
    const sentFrom = new Sender(senderEmail, senderName);

    const preferenceResult = await preference.create({
      body: {
        items: [
          {
            id: item.currency_id,
            title: item.title,
            quantity: 1,
            unit_price: item.unit_price,
            currency_id: "BRL",
          },
        ],
        notification_url: notificationUrl,
        metadata: {
          customerEmail: metadata.customerEmail,
          customerName: metadata.customerName,
          customerPlanName: item.title
        }
      },
    });

    const personalization = [
      {
        email: metadata.customerEmail,
        data: {
          date: new Date().toISOString(),
          name: metadata.customerName,
          preference_id: preferenceResult.id,
          support_email: "suporte@geraldonetotreinador.com.br",
          total_billing: item.unit_price.toString(),
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
