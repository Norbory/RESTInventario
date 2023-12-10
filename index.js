import express from 'express';

const app = express();

app.get('/ping', (req,res) => res.send('pong'))

app.get('/employees', (req,res) => res.send('Aqui estan tus empleados'))

app.post('/employees', (req,res) => res.send('Creando empleados'))

app.put('/employees', (req,res) => res.send('Actualizando empleados'))

app.delete('/employees', (req,res) => res.send('Eliminando empleados'))

app.listen(3000)
console.log("Server running")