import path from "path"
import { migrate } from "postgres-migrations"
import { CONFIG_POSTGRES } from "../src/config.environment.js"
import pkg from "pg"

const { Pool } = pkg

const pool = new Pool(CONFIG_POSTGRES)

const db = {
    runMigration: async () => {
        const client = await pool.connect();
        try {
            await migrate({ client }, path.resolve("database/migrations"))
        } catch (err) {
            console.log('migration failed', err)
        } finally {
            client.release()
        }
    }
}

export {
    db,
    pool
}

