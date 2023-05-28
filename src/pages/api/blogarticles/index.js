import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
    const { method, content } = req;
    const session = await getServerSession(req, res, authOptions);
    switch (method) {
        case "GET":
            if (!session) {
                return res.status(403).json({ error: 'not authorized to use this resource' })
            }
            try {
                const prisma = new PrismaClient();
                const response = await prisma.articles.findMany({
                    select: { id: true, title: true, img_url: true, body: true },
                    where: { is_active: true }
                });
                prisma.$disconnect();
                return res.status(200).json(response);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
            break;
        case "POST":
            try {
                if (!session) {
                    return res.status(403).json({ error: 'not authorized to use this resource' });
                }
                const prisma = new PrismaClient();
                const response = await prisma.articles.create({
                    data: content
                });
                prisma.$disconnect();
                return res.status(200).json(response.rows[0]);
            } catch (error) {
                return res.status(500).json({ error })
            }
            break;
        default:
            return res.status(400).json('invalid method');
            break;
    }
};