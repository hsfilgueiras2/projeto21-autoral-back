import { prisma } from "../config";
import { Prisma } from "@prisma/client";

async function findById(id: number, select?: Prisma.StorySelect) {
    const params: Prisma.StoryFindUniqueArgs = {
      where: {
        id,
      },
    };
  
    if (select) {
      params.select = select;
    }
  
    return prisma.story.findUnique(params);
}

const storyRepository = {
    findById,
}
export default storyRepository;