import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";


dotenv.config();



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




const app = express();


const PORT = process.env.PORT || 5000;




// =======================
// GLOBAL MIDDLEWARE
// =======================


app.use(express.json());


app.use(
 cors({

  origin:[
    "http://localhost:5173",
    "http://localhost:5173"
  ],

  credentials:true

 })
);



app.use(helmet());


app.use(
 morgan("combined")
);


app.use(logger);






// =======================
// SWAGGER
// =======================


app.use(
 "/api-docs",
 swaggerUi.serve,
 swaggerUi.setup(swaggerSpec)
);




// Test Swagger paths

console.log("Swagger Routes:");
console.log(swaggerSpec.paths);







// =======================
// ROUTES
// =======================


app.use(
 "/api/auth",
 authRouter
);


app.use(
 "/api/users",
 userRouter
);



app.use(
 "/api/profile",
 profileRouter
);



app.use(
 "/api/transaction",
 transactionRouter
);



app.use(
 "/api/budget",
 budgetRouter
);



app.use(
 "/api/goals",
 goalRouter
);



app.use(
 "/api/admin",
 adminRouter
);








// =======================
// HEALTH CHECK
// =======================


app.get(
 "/api/health",
 (req,res)=>{


  res.json({

    success:true,

    message:"Server is running 🚀"

  });


 }

);


// Isticmaal DNS public ah


// Server fronted in Production
// console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("MONGO_URI_DEV =", process.env.MONGO_URI_DEV);
console.log("MONGO_URI_PRO =", process.env.MONGO_URI_PRO);
if (process.env.NODE_ENV === "production") {

    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    // Serve the frontend app

    app.get(/.*/, (req, res) => {
        res.send(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
    })
}








// =======================
// ERROR HANDLING
// =======================


app.use(notFound);


app.use(errorHandler);









// =======================
// DATABASE
// =======================



mongoose.connect(process.env.NODE_ENV == "development"?process.env.MONGO_URI_DEV : process.env.MONGO_URI_PRO)

.then(()=>{
    console.log('✅MongoDB connected')

})
.catch((err)=>{
    console.log('❌MongoDB connection error:', err)
});

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})







// mongoose
// .connect(process.env.MONG_URL)

// .then(()=>{


//  console.log("✅ MongoDB connected");



//  app.listen(PORT,()=>{


//   console.log(
//    `🚀 Server running on port ${PORT}`
//   );


//   console.log(
//    `📚 Swagger Docs: http://localhost:${PORT}/api-docs`
//   );


//  });


// })


// .catch((error)=>{


//  console.log(
//   "❌ MongoDB Error:",
//   error.message
//  );


// });