import express from "express"
import morgan from "morgan"
import cors from "cors";

import * as env from "../src/config.environment.js";
import { routerPost } from "./routes/post.routes.js";
import { db } from "../database/database.js"

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.use(routerPost);

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})


app.listen(env.URL_SERVER, () => {
    console.log(`Server listening on port ${env.URL_SERVER}`)
    db.runMigration()
})