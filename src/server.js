import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

connectDB().then(() => {
  app.listen(env.PORT, () => {
    const baseUrl =
      env.NODE_ENV === 'production'
        ? env.BACKEND_URL_PROD
        : env.BACKEND_URL_DEV;

    console.log(`🚀 Servidor corriendo en ${baseUrl}`);
  });
});
