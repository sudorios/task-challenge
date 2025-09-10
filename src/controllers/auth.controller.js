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
    if (err.code === 11000) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = generateToken({ id: user._id, email: user.email });
    res.json({
      message: 'Login exitoso',
      user: { id: user._id, email: user.email },
      token,
    });
  } catch (err) {
    if (err.message === 'Credenciales inválidas') {
      return res.status(401).json({ message: err.message });
    }
    next(err);
  }
}
