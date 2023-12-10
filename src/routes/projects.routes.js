import {Router} from 'express';
import {getProjects,
        createProjects, 
        updateProjects, 
        deleteProjects} 
        from '../controllers/projects.controller.js'

const router = Router()

router.get('/projects', getProjects)

router.post('/projects', createProjects)

router.put('/projects', updateProjects)

router.delete('/projects', deleteProjects)

export default router;