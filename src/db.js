import {createPool} from 'mysql2/promise';

export const conn = createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: '3306',
    database: 'geodigital'
})

// conn.query('SELECT * FROM projects', (err, result) => )