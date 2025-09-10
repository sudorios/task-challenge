import * as taskService from '../services/task.service.js';

export async function getTasks(req, res, next) {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

export async function createTask(req, res, next) {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}

export async function updateTask(req, res, next) {
  try {
    const { id } = req.params;
    const task = await taskService.updateTask(id, req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
}

export async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    next(err);
  }
}
