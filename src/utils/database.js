import { Pool } from "pg";

let conn;
if (!conn) {
    conn = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    });
}
console.log(process.env.DB_USER);
export { conn };