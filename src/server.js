import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js'; 

connectDB().then(() => {
  app.listen(env.PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${env.PORT}`);
  });
});
