import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import ts from "typescript";

const prisma = new PrismaClient();

type UserData = {
    userName : string
}

export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { userName }: UserData = req.body;
  const userdata: UserData = await prisma.user.findFirst({
    where: {
      userName: userName
    },
  });
  if (!userdata) {
    if (req.method === "POST") {
      const newUser = await prisma.user.create({ data: { userName } });
      return res.status(200).json(newUser);
    }
  }
  console.log(userdata)
  return res.status(400).json({ userdata })
  }