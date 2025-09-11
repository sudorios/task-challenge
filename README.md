# 📌 Task Challenge API

API RESTful para manejar usuarios y tareas, desarrollada con **Node.js + Express + MongoDB**.  
Incluye **autenticación con JWT** y un sistema de **CRUD completo** para la gestión de tareas.

---

## 🚀 Características

- Registro e inicio de sesión de usuarios con **JWT**.  
- CRUD de tareas (crear, leer, actualizar, eliminar).  
- **Soft delete** (enviar tarea a papelera sin eliminarla definitivamente).  
- Validación de permisos: cada usuario solo puede gestionar sus propias tareas.  
- Manejo de errores y respuestas JSON claras.  

---

## 🛠️ Tecnologías utilizadas

- **Node.js** (runtime)
- **Express.js** (framework web)
- **MongoDB + Mongoose** (base de datos NoSQL)
- **JWT (jsonwebtoken)** (autenticación)

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sudorios/task-challenge

cd task-challenge

# Instalar dependencias
npm install

```
## Configuracion de ENV

Configura el archivo .env en la raíz del proyecto

PORT=3000
MONGO_URI=mongodb://localhost:27017/task-challenge
JWT_SECRET=12345678

# Modo desarrollo
npm run dev

# Modo producción
npm start

## 📦 Estructura del proyecto

src/
├── controllers/      # Controladores de rutas
├── services/         # Lógica de negocio
├── models/           # Modelos de Mongoose
├── utils/            # Utilidades (ej. JWT)
├── middlewares/      # Middlewares (auth, errores)
├── routes/           # Definición de endpoints
└── app.js            # Configuración principal

