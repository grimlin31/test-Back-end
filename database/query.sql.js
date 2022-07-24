import { TABLES_POSTGRES } from "../src/config.environment.js";

const createQuery = `INSERT INTO ${TABLES_POSTGRES.posts} (name, description) VALUES ($1, $2) RETURNING *`

const getAllPostQuery = `SELECT * FROM ${TABLES_POSTGRES.posts}`

const deletePostByName = `DELETE FROM ${TABLES_POSTGRES.posts} WHERE postId = $1 RETURNING *`

export {
    createQuery,
    getAllPostQuery,
    deletePostByName
}
