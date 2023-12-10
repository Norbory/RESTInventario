import express from 'express';
import projectsRoute from './routes/projects.routes.js'
import indexRoute from './routes/index.routes.js'

const app = express();

app.use(indexRoute);
app.use(projectsRoute);

app.listen(3000)
console.log("Server running")