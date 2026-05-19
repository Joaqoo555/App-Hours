// import { PrismaClient, Prisma } from "./generated/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
// const prisma = new PrismaClient({ adapter: pool });

// const userData: Prisma.UserCreateInput[] = [
//   {
//     name: "Alice",
//     email: "alice@prisma.io",
//     posts: {
//       create: [
//         {
//           title: "Join the Prisma Discord",
//           content: "https://pris.ly/discord",
//           published: true,
//         },
//       ],
//     },
//   },
// ];

// async function main() {
//   console.log(`Start seeding ...`);

//   // Clear existing data
//   await prisma.post.deleteMany();
//   await prisma.user.deleteMany();

//   for (const u of userData) {
//     const user = await prisma.user.create({
//       data: u,
//     });
//     console.log(`Created user with id: ${user.id}`);
//   }
//   console.log(`Seeding finished.`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
