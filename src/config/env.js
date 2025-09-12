import dotenv from 'dotenv';
dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  BACKEND_URL_DEV: process.env.BACKEND_URL_DEV,
  BACKEND_URL_PROD: process.env.BACKEND_URL_PROD,
};
