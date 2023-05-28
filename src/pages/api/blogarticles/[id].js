import { conn } from "../../../utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async (req, res) => {
    const { method, query, content } = req;
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).json({ error: 'not authorized to use this resource' })
    }
    switch (method) {
        case 'GET':
            try {
                const prisma = new PrismaClient();
                const response = await prisma.articles.findUnique({
                    select: { id: true, title: true, img_url: true, body: true },
                    where: { id: query.id, is_active: true }
                });
                prisma.$disconnect();
                if (response.rows.length === 0) {
                    return res.status(404).json({ message: 'no article found' });
                }
                return res.status(200).json(response.rows);
            } catch (error) {
                return res.status(500).json(error.message);
            }
            break;
        case 'PATCH':
            try {
                if (!session) {
                    return res.status(403).json({ error: 'not authorized to use this resource' });
                }
                if (!query.id) {
                    return res.status(400).json('No valid id');
                }
                const { title, img_url, body } = content;
                const prisma = new PrismaClient();
                const response = await prisma.articles.puser({
                    where: { id: query.id },
                    insert: { title: title, img_url: img_url, body: body },
                    upsert: { title: title, img_url: img_url, body: body }
                });
                prisma.$disconnect();
                if (response.rows.length === 0) {
                    return res.status(404).json({ message: 'no article found' });
                }
                return res.status(200).json(response.rows);
            } catch (error) {
                res.status(500).json(error.message);
            }
            return res.json('modify article');
            break;
        default:
            return res.json('invalid method');
            break;
    }
}