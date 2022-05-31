import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ThemeData = {
  themeName : string
}

export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { themeName }: ThemeData = req.body;
  const themeExist: ThemeData = await prisma.theme.findFirst({
    where: {
      themeName
    }
  })
  if (!themeExist) {
    if (req.method === "POST") {
      const newTheme = await prisma.theme.create({ data: { themeName } });
      return res.status(200).json(newTheme);
    }
  }
  return res.status(409).json({ message: "user exist" })
}