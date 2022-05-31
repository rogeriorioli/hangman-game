// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getWordsFromTheme(req, res) {
  const { themeName } = req.query;
  const words = await prisma.theme.findFirst({
    where: {
      themeName,
    },
    include: {
      words: true,
    },
  });
  if (!words) {
    res.status(400).json({ message: "no theme" });
  }

  res.status(200).json(words);
}
