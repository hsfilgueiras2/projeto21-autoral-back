import { prisma } from "../config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}
async function close(userId: number ){
  const sessionToDelete = await findByUserId(userId)
  return prisma.session.delete({
    where:{id:sessionToDelete.id}
  })
}
async function findByUserId(userId:number){
  return prisma.session.findFirst({
    where:{
      userId:userId
    }
  })
}
async function findByToken(token: string){
  return prisma.session.findFirst({
    where:{
      token:token
    }
  })
}

const sessionRepository = {
  create,
  close,
  findByUserId,
  findByToken
};

export default sessionRepository;
