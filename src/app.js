import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL_DEV,
  process.env.FRONTEND_URL_PROD,
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));

if (process.env.NODE_ENV !== "production") {
  import("swagger-ui-express").then(({ default: swaggerUi }) => {
    import("yamljs").then(({ default: YAML }) => {
      const swaggerDocument = YAML.load(
        path.join(__dirname, "./docs/openapi.yaml")
      );

      app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
      console.log("Swagger UI disponible en /api-docs");
    });
  });
}

app.use("/api", routes);

export default app;