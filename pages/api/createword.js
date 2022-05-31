import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { word, themeId } = req.body;
    const newWord = await prisma.words.create({
      data: { word: word, themeId: themeId },
    });
    return res.status(200).json(newWord);
  }
}
