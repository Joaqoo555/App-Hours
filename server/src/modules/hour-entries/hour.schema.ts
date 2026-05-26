import {z} from "zod";

export const createHourEntrySchema = z.object({
    userId: z.number(),
    vehicleId: z.number(),
    projectId: z.number(),
    workDate: z.date(),
    startTime: z.date(),
    endTime: z.date(),
    normalHours: z.number(),
    pernoctation: z.boolean(),
    dailyMeal: z.boolean(),
    driverSignature: z.enum(["SIGNED_TO_GO", "SIGNED_TO_RETURN", "BETWEEN", "NOT_SIGNED"]),
    taskDetails: z.string().nullable(),
});



// const createHourEntrySchema = z.object({
// se crea en base de datos
//     id: z.number(),
//     createdAt: z.date(),
//     updateAt: z.date().nullable(),

//============================================== Envia el cliente ========================================
// lo manda el cliente
//     userId: z.number(),
// usuario lo maneja manual
//     vehicleId: z.number(),
//     projectId: z.number(),
//     workDate: z.date(),
//     startTime: z.date(),
//     endTime: z.date(),
//     normalHours: z.number(),
//     pernoctation: z.boolean(),
//     dailyMeal: z.boolean(),
//     driverSignature: z.enum(["SIGNED_TO_GO", "SIGNED_TO_RETURN", "BETWEEN", "NOT_SIGNED"]),
//     taskDetails: z.string().nullable(),
//==================================== Maneja el Servidor  =================================================
// se calcula en base a startTime y endTime
//     extra50Hours: z.number(),
//     night50Hours: z.number(),
//     extra100Hours: z.number(),
//     tenHourMeal: z.boolean(),
//     launchWork: z.boolean(),

// Segun la decha de nacimiento del usuario y la fecha del workDate se determina si es feriado o no
//     isHoliday: z.boolean(),

// Lo determina admin
//     status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
//     approvedId: z.number().nullable(),
//     approvedDate: z.date().nullable(),

// });

// export const HourEntryStatus: {
//   PENDING: 'PENDING',
//   APPROVED: 'APPROVED',
//   REJECTED: 'REJECTED'
// };
// export namespace $Enums {
//   export const DriverSignature: {
//   SIGNED_TO_GO: 'SIGNED_TO_GO',
//   SIGNED_TO_RETURN: 'SIGNED_TO_RETURN',
//   BETWEEN: 'BETWEEN',
//   NOT_SIGNED: 'NOT_SIGNED'
// };
// type hour_entry = {
//     id: number;
//     userId: number;
//     vehicleId: number;
//     projectId: number;
//     workDate: Date;
//     startTime: Date;
//     endTime: Date;
//     normalHours: runtime.Decimal;
//     extra50Hours: Prisma.Decimal;
//     night50Hours: Prisma.Decimal;
//     extra100Hours: Prisma.Decimal;
//     tenHourMeal: boolean;
//     launchWork: boolean;
//     pernoctation: boolean;
//     dailyMeal: boolean;
//     isHoliday: boolean;
//     driverSignature: $Enums.DriverSignature;
//     taskDetails: string | null;
//     status: $Enums.HourEntryStatus;
//     approvedId: number | null;
//     approvedDate: Date | null;
//     createdAt: Date;
//     updateAt: Date | null;
// }