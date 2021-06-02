import { db } from 'src/lib/db'
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
  let testAccount = await nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
      // user: process.env.EMAIL_USER,
      // pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: input.from, // sender address
    to: 'ryan@doylecodes.com', // list of receivers
    subject: input.subject, // Subject line
    text: input.content, // plain text body
    html: `<body><p>${input.content}</p></body>`, // html body
  })

  return db.email.create({
    data: input,
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
