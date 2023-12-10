import express from 'express';
import cors from 'cors';
import projectsRoute from './routes/projects.routes.js';
import indexRoute from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(indexRoute);
app.use("/api", projectsRoute);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Página no encontrada"
    });
});

app.listen(3001);
console.log("Servidor en ejecución");
