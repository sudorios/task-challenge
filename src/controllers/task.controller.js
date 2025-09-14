import * as taskService from '../services/task.service.js';

export async function getTasks(req, res, next) {
  try {
    const userId = req.user.id; 
    const tasks = await taskService.getTasks(userId);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

export async function createTask(req, res, next) {
  try {
    const userId = req.user.id;
    const { titulo, descripcion } = req.body;

    if (!titulo || !descripcion) {
      return res.status(400).json({ message: 'Título y descripción son requeridos' });
    }

    const task = await taskService.createTask({ ...req.body, user: userId });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}

export async function updateTask(req, res, next) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await taskService.updateTask(id, req.body, userId);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada o no pertenece al usuario' });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
}

export async function softDeleteTask(req, res, next){
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await taskService.softDeleteTask(id, userId);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada o no pertenece al usuario' });
    }

    res.json({ message: 'Tarea deshechada' });
  } catch(err) {
    next(err);
  }
}

export async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await taskService.deleteTask(id, userId);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada o no pertenece al usuario' });
    }

    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    next(err);
  }
}

export async function markTask(req, res, next) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await taskService.markTask(id, userId);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada o no pertenece al usuario' });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
}

export async function getInactiveTasks(req, res, next) {
  try {
    const userId = req.user.id;
    const tasks = await taskService.getInactiveTasks(userId);

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: 'No hay tareas inactivas para este usuario' });
    }

    res.json(tasks);
  } catch (err) {
    next(err);
  }
}