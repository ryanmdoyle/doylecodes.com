import { db } from 'src/lib/db'
import md5 from 'md5'
import nodemailer from 'nodemailer'

export const emails = () => {
  return db.email.findMany()
}

export const email = ({ id }) => {
  return db.email.findUnique({
    where: { id },
  })
}

export const createEmail = async ({ input }) => {
  let transporter = await nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      // user: testAccount.user,
      // pass: testAccount.pass,
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: 'website-form@doylecodes.com', // sender address
    to: 'ryan@doylecodes.com', // list of receivers
    subject: input.subject, // Subject line
    text: input.content, // plain text body
    html: `<body><p>From: ${input.email}</p><p>${input.content}</p><p>- ${input.name}</p></body>`, // html body
  })
  const emailHash = md5(input.email)
  return db.email.create({
    data: {
      name: input.name,
      email: emailHash,
      subject: input.subject,
      content: input.content,
    },
  })
}

export const updateEmail = ({ id, input }) => {
  return db.email.update({
    data: input,
    where: { id },
  })
}

export const deleteEmail = ({ id }) => {
  return db.email.delete({
    where: { id },
  })
}
