// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt'

// const prisma = new PrismaClient()

// async function main() {
//   const adminEmail = "admin@tuapp.com"

//   const existingAdmin = await prisma.user.findUnique({
//     where: { email: adminEmail }
//   })

//   if (!existingAdmin) {
//     const hashedPassword = await bcrypt.hash("admin123", 10)

//     await prisma.user.create({
//       data: {
//         email: adminEmail,
//         password: hashedPassword,
//         role: "ADMIN"
//       }
//     })

//     console.log("Admin creado")
//   } else {
//     console.log("Admin ya existe")
//   }
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect())

