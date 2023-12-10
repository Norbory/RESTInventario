import {conn} from '../db.js'

export const getPing =  async (req,res) => {
    const [result] = await conn.query('SELECT "Pong" AS result')
    res.json(result[0])
}