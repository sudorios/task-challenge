import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Task API',
      version: '1.0.0',
      description: 'API REST para gestionar tareas con Node.js + Express + MongoDB',
    },
    servers: [
      { url: 'http://localhost:4000/api' }
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };