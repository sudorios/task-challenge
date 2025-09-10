import User from '../models/user.model.js';
import { hashPassword, comparePasswords } from '../utils/hash.util.js';

export async function registerUser({ email, password }) {
  const hashed = await hashPassword(password);
  const user = await User.create({ email, password: hashed });
  return user;
}

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Usuario no encontrado');
  const match = await comparePasswords(password, user.password);
  if (!match) throw new Error('Credenciales inválidas');
  return user;
}
