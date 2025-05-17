import { NextRequest, NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailersend = new MailerSend({ apiKey: process.env.MAILERSEND_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const notification = await req.json();
    const paymentId = notification.data.id;

    
    const paymentResponse = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_MERCADOPAGO_ACCESS_TOKEN!}`,
        },
      }
    );
    
    
    if (!paymentResponse.ok) {
      console.error(
        "Erro ao obter detalhes do pagamento:",
        paymentResponse.status
      );
      return NextResponse.json(
        { message: "Erro ao obter detalhes do pagamento" },
        { status: 500 }
      );
    }
    
    const paymentDetails = await paymentResponse.json();
    
    console.log(paymentDetails)

    if (paymentDetails.status === "approved") {
      const customerEmail = paymentDetails.metadata.customer_email;
      const customerName = paymentDetails.metadata.customer_name;
      const productName = paymentDetails.metadata.customer_plan_name;
      const orderId = paymentDetails.id;
      const supportEmail = "suporte@seusite.com.br";
      const templateId = "zr6ke4n807v4on12";

      if (customerEmail && customerName && productName) {
        const recipients = [new Recipient(customerEmail, customerName)];
        const senderEmail = "suporte@test-68zxl279qne4j905.mlsender.net"; // Substitua pelo seu email verificado
        const senderName = "Geraldo Neto Treinador"; // Ou use o nome do cliente, se apropriado
        const sentFrom = new Sender(senderEmail, senderName);

        const personalization = [
          {
            email: customerEmail,
            data: {
              order_id: orderId,
              name: customerName,
              product_name: productName,
              support_email: supportEmail,
              payment_date: new Date().toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            },
          },
        ];

        const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setReplyTo(sentFrom)
          .setSubject(`Seu pedido #${orderId} foi aprovado!`)
          .setTemplateId(templateId)
          .setPersonalization(personalization);

        try {
          await mailersend.email.send(emailParams);

          return NextResponse.json({
            message: "E-mail de aprovação enviado com sucesso",
          });
        } catch (error) {
          console.error("Erro ao enviar e-mail de aprovação:", error);
          return NextResponse.json(
            { message: "Erro ao enviar e-mail de aprovação" },
            { status: 500 }
          );
        }
      } else {
        return NextResponse.json(
          {
            message:
              "Dados do cliente ou produto não encontrados nos metadados",
          },
          { status: 400 }
        );
      }
    } else if (paymentDetails.status === "pending") {
      console.log("Pagamento pendente:", paymentId);
      return NextResponse.json({ message: "Pagamento pendente" });
    } else {
      console.log("Status do pagamento:", paymentDetails.status, paymentId);
      return NextResponse.json({
        message: `Status do pagamento: ${paymentDetails.status}`,
      });
    }
  } catch (error) {
    console.error("Erro ao processar notificação:", error);
    return NextResponse.json(
      { error: "Erro ao processar notificação" },
      { status: 500 }
    );
  }
}
