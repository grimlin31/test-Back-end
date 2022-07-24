import { copy } from "../utils/utils.js"
import { pool } from "../../database/database.js"
import { createQuery, deletePostByName, getAllPostQuery } from "../../database/query.sql.js"

const getAllPosts = async (req, res, next) => {
    try {
        const { rows } = await pool.query(
            getAllPostQuery
        )
        console.log(rows)
        res.json({
            data: rows
        })
    } catch (err) {
        next(err)
    }
}

const createPost = async (req, res)=> {
    try {
        const { body } = req

        const { name, description } = copy(body);

        const { rows } = await pool.query( 
        createQuery, 
        [
            name,
            description
        ] 
    )
    res.json({
        data: rows[0]
    })
    } catch (err) {
        next(err)
    }

}

const deletePost = async (req, res)=> {
    try {
        const { id } = req.params
        const { rows, rowCount } = await pool.query(
            deletePostByName,
            [id]
        )
    
        if(rowCount === 0) {
            return new Error('Post Not Found')
        }
    
        res.json({
            data: rows
        })
    } catch (err) {
        next(err)
    }

}

export {
    getAllPosts,
    createPost,
    deletePost
}
