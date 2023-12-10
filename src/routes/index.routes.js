import {Router} from 'express'
import {conn} from '../db.js'

const router = Router();

router.get('/ping', async (req,res) => {
    const [result] = await conn.query('SELECT "Pong" AS result')
    res.json(result[0])
})

export default router;