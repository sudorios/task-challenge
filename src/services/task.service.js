import Task from '../models/task.model.js';

export async function getTasks(userId) {
  return await Task.find({ user: userId, activa: true });
}

export async function createTask(data) {
  return await Task.create(data);
}

export async function updateTask(id, data, userId) {
  return await Task.findOneAndUpdate({ _id: id, user: userId }, data, { new: true });
}

export async function softDeleteTask(id, userId) {
  return await Task.findOneAndUpdate({ _id: id, user: userId }, { activa: false }, { new: true });
}

export async function deleteTask(id, userId) {
  return await Task.findOneAndDelete({ _id: id, user: userId });
}

export async function markTask(id, userId) {
  const task = await Task.findOne({ _id: id, user: userId });
  if (!task) throw new Error('Tarea no encontrada');
  task.hecha = !task.hecha;
  await task.save();
  return task;
}


export async function getInactiveTasks(userId) {
  return await Task.find({ user: userId, activa: false });
}