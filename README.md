# 📌 Task Challenge API

API RESTful para gestionar usuarios y tareas, desarrollada con **Node.js + Express + MongoDB**.  
Incluye **autenticación con JWT**, **CRUD de tareas**, y documentación con **Swagger**.

---

## 🚀 Características

- **Auth con JWT**: registro e inicio de sesión.
- **CRUD de tareas**: crear, listar, actualizar y eliminar.
- **Soft delete**: mover a papelera sin borrar definitivamente.
- **Autorización**: cada usuario solo gestiona sus propias tareas.
- **Documentación**: Swagger UI disponible.

---

## 🛠️ Tecnologías

- **Node.js** (runtime)
- **Express** (framework web)
- **MongoDB** + **Mongoose** (ODM)
- **JWT (jsonwebtoken)**
- **Swagger UI** + **OpenAPI**

---

## ✅ Requisitos previos

- Node.js 18+ 
- MongoDB en ejecución (local o remoto)

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sudorios/task-challenge
cd task-challenge

# Instalar dependencias
npm install
```

---

## 🔐 Configuración de entorno (.env)

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Puerto donde correrá el servidor Express
PORT=4000

# Cadena de conexión a MongoDB
MONGODB_URI=mongodb://localhost:27017/task-challenge

# Clave para firmar JWT
JWT_SECRET=cambia-esta-clave-segura
```

Notas:
- El proyecto usa `PORT` y `MONGODB_URI` (no `MONGO_URI`).
- La documentación OpenAPI asume `http://localhost:4000/api` como URL base.

---

## ▶️ Ejecutar el proyecto

```bash
# Modo desarrollo (watch)
npm run dev
```

El servidor iniciará en: `http://localhost:${PORT}` (por defecto `http://localhost:4000`).

---

## 📚 Documentación (Swagger)

- UI: `http://localhost:4000/api-docs`
- Base de la API: `http://localhost:4000/api`

---

## 🔀 Endpoints principales

- Auth
  - `POST /api/auth/register`
  - `POST /api/auth/login`
- Tasks (requiere `Authorization: Bearer <token>`)
  - `GET /api/tasks`
  - `POST /api/tasks`
  - `PUT /api/tasks/{id}`
  - `PATCH /api/tasks/{id}` (mover a papelera)
  - `PATCH /api/tasks/{id}/done` (marcar/desmarcar hecha)
  - `DELETE /api/tasks/{id}`

---

## 📦 Estructura del proyecto

```
src/
├── app.js            # App Express y Swagger UI
├── server.js         # Punto de entrada (levanta el servidor)
├── config/           # Configuración (db, env, swagger)
├── controllers/      # Controladores de rutas
├── services/         # Lógica de negocio
├── models/           # Modelos de Mongoose
├── middlewares/      # Middlewares (auth, errores)
├── routes/           # Definición de endpoints
├── docs/             # OpenAPI (YAML)
└── utils/            # Utilidades (JWT, hash)
```

---

## 🧰 Scripts disponibles

- `npm run dev`: inicia el servidor con `node --watch src/server.js`.

> No hay script `npm start` definido. Si lo necesitas, agrégalo en `package.json`.

---

## 🔎 Notas y buenas prácticas

- Usa una `JWT_SECRET` larga y aleatoria en producción.
- No subas tu `.env` a control de versiones.
- Asegúrate de que MongoDB esté accesible desde `MONGODB_URI`.

