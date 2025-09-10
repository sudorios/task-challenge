import Task from '../models/task.model.js';

export async function getTasks() {
  return await Task.find();
}

export async function createTask(data) {
  return await Task.create(data);
}

export async function updateTask(id, data) {
  return await Task.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteTask(id) {
  return await Task.findByIdAndDelete(id);
}
