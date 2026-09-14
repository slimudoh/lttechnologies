import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const transporter = nodemailer.createTransport({
  name: "mail.one-block.org",
  host: "mail.one-block.org",
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  auth: {
    user: "no-reply@one-block.org",
    pass: "P8B(8b]z37d[",
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: "SSLv3",
  },
});
