import { conn } from "../../../utils/database";
export default async (req, res) => {
    const { method, query, content } = req;
    switch (method) {
        case 'GET':
            try {
                const queryText = 'SELECT id,title,img_url,body,created_on FROM articles WHERE is_active = TRUE AND id = $1';
                const values = [query.id];
                const response = await conn.query(queryText, values);
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
                if (!query.id) {
                    res.status(400).json('No valid id');
                }
                const { title, img_url, body, is_active } = content;
                const queryText = 'UPDATE articles SET title = $1, img_url = $2, body = $3, is_active = $4 WHERE id = $5 RETURNING *'
                const values = [title, img_url, body, is_active, query.id];
                const response = await conn.query(queryText, values);
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