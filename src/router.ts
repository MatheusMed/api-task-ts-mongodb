import { Router } from 'express';
import TaskControllers from './controllers/TaskControllers';


const router = Router();

router.get('/tasks', TaskControllers.findListTask);
router.post('/task', TaskControllers.create);
router.delete('/deleteTask/:id', TaskControllers.deleteTask);


export default router;