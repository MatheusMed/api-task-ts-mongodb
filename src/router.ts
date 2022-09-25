import { Router } from 'express';
import TaskControllers from './controllers/TaskControllers';


const router = Router();


router.post('/user', TaskControllers.create);


export default router;