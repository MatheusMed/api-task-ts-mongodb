import { Response, Request } from 'express';
import Task from '../database/schemas/task';

class TaskController {


  async create(request: Request, response: Response) {

    const { title, completed } = request.body;

    try {

      const task = await Task.create({ title, completed });

      return response.json(task);


    } catch (error) {
      return response.status(400).json({ error });
    }



  }
}


export default new TaskController;