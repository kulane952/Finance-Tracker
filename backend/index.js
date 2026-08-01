import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

import { swaggerSpec } from "./utils/swagger.js";

// Routes
import authRouter from "./routers/auth.js";
import userRouter from "./routers/users.js";
import profileRouter from "./routers/profile.js";
import transactionRouter from "./routers/transaction.js";
import budgetRouter from "./routers/budgetRouter.js";
import goalRouter from "./routers/goalRouter.js";
import adminRouter from "./routers/admin.js";

// Middleware
import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandle.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =======================
// GLOBAL MIDDLEWARE
// =======================

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL
    ].filter(Boolean),
    credentials: true
  })
);

app.use(helmet());
app.use(morgan("combined"));
app.use(logger);

// =======================
// SWAGGER
// =======================

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

console.log("Swagger Routes:");
console.log(swaggerSpec.paths);

// =======================
// API ROUTES
// =======================

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/budget", budgetRouter);
app.use("/api/goals", goalRouter);
app.use("/api/admin", adminRouter);

// =======================
// HEALTH CHECK
// =======================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀"
  });
});

// =======================
// FRONTEND (PRODUCTION)
// =======================

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(
      path.join(__dirname, "../frontend/dist")
    )
  );

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "../frontend/dist/index.html"
      )
    );
  });
}

// =======================
// ERROR HANDLING
// =======================

app.use(notFound);
app.use(errorHandler);

// =======================
// DATABASE CONNECTION
// =======================

const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI_PRO
    : process.env.MONGO_URI_DEV;

console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("Mongo URI Found =", !!mongoURI);

if (!mongoURI) {
  console.error("❌ MongoDB URI is missing");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📚 Swagger Docs: /api-docs`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:");
    console.error(error.message);
    process.exit(1);
  });