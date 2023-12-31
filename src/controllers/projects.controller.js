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
    try {
        const { id } = req.params;
        const [rows] = await conn.query("SELECT * FROM projects WHERE id = ?", [
          id,
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Project not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };
    
export const deleteProjects =  async (req,res) => {
    try {
        const { id } = req.params;
        const [rows] = await conn.query("DELETE FROM projects WHERE id = ?", [id]);
    
        if (rows.affectedRows <= 0) {
          return res.status(404).json({ message: "Project not found" });
        }
    
        res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };

export const createProjects = async (req,res) => {
    try {
        const { name } = req.body;
        const [rows] = await conn.query(
          "INSERT INTO projects (name) VALUES (?)",
          name
        );
        res.status(201).json({ id: rows.insertId, name });
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };

export const updateProjects = async (req,res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
    
        const [result] = await conn.query(
          "UPDATE projects SET name = IFNULL(?, name) WHERE id = ?",
          [name, id]
        );
    
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Project not found" });
    
        const [rows] = await conn.query("SELECT * FROM projects WHERE id = ?", [
          id,
        ]);
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };