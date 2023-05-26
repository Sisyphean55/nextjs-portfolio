import { conn } from "../../../database";
export default async (req, res) => {
    const { method, content } = req;
    let response = null;
    switch (method) {
        case "GET":
            try {
                response = await conn.query("SELECT id,title,img_url,body,created_on FROM articles WHERE is_active = TRUE");
                return res.status(200).json(response.rows);
            } catch (error) {
                return res.status(500).json({error: error.message})
            }
            break;
        case "POST":
            try {
                const { title, img_url, body } = content;
                const query = 'INSERT INTO articles(title,img_url,body) VALUES ($1, $2, $3) RETURNING *';
                const values = [title, img_url, body];
                response = await conn.query(query, values);
                return res.status(200).json(response.rows[0]);
            } catch (error) {
                return res.status(500).json({error})
            }
            break;
        default:
            return res.status(400).json('invalid method');
            break;
    }
};