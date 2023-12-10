import {conn} from '../db.js'

export const getProjects = async (req,res) => {
    try{
        const [rows] = await conn.query('SELECT * FROM projects');
        res.json(rows) 
    }catch(error){
        res.status(500).json({
            message:"Algo salio mal"
        })
    }
};

export const getProjectById = async (req,res) => {
    try{
        const [rows] = await conn.query('SELECT * FROM projects WHERE id=?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: "No existe el proyecto que estas solicitando"
        })
        res.json(rows[0])
    }catch(error){
        res.status(500).json({
            message:"Algo salio mal"
        })
    }
};

export const deleteProjects =  async (req,res) => {
    try{
        const [rows] = await conn.query('SELECT * FROM projects WHERE id=?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: "No existe el proyecto que estas solicitando"
        })
        res.json(rows[0])

        const [result] = await conn.query('DELETE FROM projects WHERE id=?', [req.params.id]);
        if (result.affectedRows <= 0) return res.status(404).json({
            message:"Proyecto no encontrado"
        })
        res.sendStatus(204)
    }catch(error){
        res.status(500).json({
            message:"Algo salio mal"
        })
    }
};

export const createProjects = async (req,res) => {
    const {name} = req.body;
    try{
        const [rows] = await conn.query('INSERT INTO projects (name) VALUES (?)', name);
        res.send({
            id: rows.insertId,
            name,
        });
    }catch(error){
        res.status(500).json({
            message:"Algo salio mal"
        })
    }
};

export const updateProjects = async (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    try{
        const [result] = await conn.query('UPDATE projects SET name = IFNULL(?,name) WHERE id = ?', [name, id]);
        if (result.affectedRows <=0) return res.status(404).json({
            message:"Proyecto no valido"
        })

        const [rows] = await conn.query('SELECT * FROM projects WHERE id = ?', [id])
        res.json(rows[0]);
    }catch(error){
        res.status(500).json({
            message:"Algo salio mal"
        })
    }
};

