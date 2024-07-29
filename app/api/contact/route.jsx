import { NextResponse } from "next/server";
import { emailStyles, emailStylesAutoResponse } from "./styles/styles";
export async function POST(request) {
  const nodemailer = require("nodemailer");

  const serviceEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_EMAIL;
  const clientEmail = process.env.NEXT_PUBLIC_EMAIL_CLIENT_EMAIL;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL,
    port: process.env.NEXT_PUBLIC_EMAIL_SERVICE_PORT,
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: serviceEmail,
      pass: password,
    },
  });
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const nameL = formData.get("first-name");
    const nameF = formData.get("last-name");
    const company = formData.get("company-name");
    const phoneNumber = formData.get("phone-number");
    const companySize = formData.get("company-size");
    const req = formData.get("message");
    const fullName = nameL + " " + nameF;
    const subject = `New Request  from ${fullName} ${company}`;

    const getMailFromUser = await transporter.sendMail({
      from: serviceEmail,
      to: clientEmail,
      replyTo: email,
      subject: subject,
      html: `
            <html>
            <head>
              ${emailStyles}
            </head>
            <body>
              <div class="container">
              <img src="https://estiabim.ch/images/Logo/logo-full.png" alt="EstiaBim Logo" style="max-width: 100px; height: auto;">

                <h1>New Request from ${fullName} ${company}</h1>
                <h3>Message: ${req}</h3>
                <p>Email: ${email}</p>
                <p>Tel: ${phoneNumber}</p>
                <p>Company: ${company}</p>
                <p>Company Size: ${companySize}</p>
                <p>Full Name: ${fullName}</p>
              </div>
            </body>
          </html>
            `,
    });
    const subjectAutoMessage = `EstiaBim ${company}`;

    const sendAutoResponse = await transporter.sendMail({
      from: serviceEmail,
      to: email,
      replyTo: serviceEmail,
      subject: subjectAutoMessage,
      html: `
          <html>
            <head>
              ${emailStylesAutoResponse}
            </head>
            <body>
              <div class="container">
                <h1>Hello, <br> ${fullName}</h1>
                <p>Thank you for your message, we will contact you soon</p> 
            
                <img src="https://estiabim.ch/images/Logo/logo-full.png" alt="EstiaBim Logo" style="max-width: 100px; height: auto; padding:4px">
                <h3>Team EstiaBim
                </h3>
                <p>${serviceEmail}</p>   
                <p>
                  <a href="https://estiabim.ch" target="_blank">
                    Visit the website EstiaBim
                  </a>   
                </p>    
                <p>This email is sent automatically, please do not respond to it.

                </p> 
              </div>
            </body>
          </html>
        `,
    });
    return new NextResponse(sendAutoResponse);
  } catch (error) {
    return new NextResponse(error);
  }
}
