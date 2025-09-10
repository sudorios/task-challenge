import * as authService from '../services/auth.service.js';
import { generateToken } from '../utils/jwt.util.js';

export async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await authService.registerUser({ email, password });
    const token = generateToken({ id: user._id, email: user.email });
    res.status(201).json({
      message: 'Usuario registrado con éxito',
      user: { id: user._id, email: user.email },
      token,
    });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser({ email, password });
    const token = generateToken({ id: user._id, email: user.email });
    res.json({
      message: 'Login exitoso',
      user: { id: user._id, email: user.email },
      token,
    });
  } catch (err) {
    next(err);
  }
}
