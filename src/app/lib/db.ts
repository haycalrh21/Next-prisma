import { PrismaClient } from '@prisma/client'


declare global{
  var prisma:PrismaClient| undefined
}

export const db = globalThis.prisma || new PrismaClient()
// const prisma = new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;


// export const db = new PrismaClient();


