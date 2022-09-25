import { Response, Request } from 'express';

import Task from '../database/schemas/task';

class TaskController {

  async findListTask(request: Request, response: Response) {

    const tasks = await Task.find();

    return response.json(tasks);
  }

  async deleteTask(request: Request, response: Response) {

    const id = new Task()._id;

    const deleteTask = await Task.deleteOne({ id });

    return response.json(deleteTask);
  }


  async create(request: Request, response: Response) {

    const { title, completed } = request.body;

    try {

      const taskExist = await Task.findOne({ title });

      if (taskExist) {
        return response.status(400).json({
          error: 'Task already exists',
          status: 400,
        });
      }

      const task = await Task.create({ title, completed });

      return response.json(task);


    } catch (error) {
      return response.status(400).json({ error });
    }



  }
}


export default new TaskController;