import { prisma } from "../config";
import { Prisma } from "@prisma/client";

async function getAllMarkers(){
    return prisma.marker.findMany();
}

const markerRepository ={
    getAllMarkers,
}
export default markerRepository;