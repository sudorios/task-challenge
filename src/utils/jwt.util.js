import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

const JWT_EXPIRES_IN = '1d';

export function generateToken(payload) {
  if (!env.JWT_SECRET) throw new Error('JWT_SECRET no está definido');
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token) {
  if (!env.JWT_SECRET) throw new Error('JWT_SECRET no está definido');
  return jwt.verify(token, env.JWT_SECRET);
}
