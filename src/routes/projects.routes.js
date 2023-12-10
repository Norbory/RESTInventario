import {Router} from 'express';
import {getProjects,
        createProjects, 
        updateProjects, 
        deleteProjects,
        getProjectById} 
        from '../controllers/projects.controller.js'

const router = Router()

router.get('/projects', getProjects)

router.get('/projects/:id', getProjectById)

router.post('/projects', createProjects)

router.patch('/projects/:id', updateProjects)

router.delete('/projects/:id', deleteProjects)

export default router;