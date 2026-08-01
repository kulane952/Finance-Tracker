import path from "path";
import { fileURLToPath } from "url";
import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {

  definition: {

    openapi:"3.0.0",

    info:{
      title:"Finance Tracker API",
      version:"1.0.0",
      description:"Personal Finance Tracker Backend API"
    },


    servers:[
      {
        url:"http://localhost:5000/api"
      }
    ],


    components:{
      securitySchemes:{
        bearerAuth:{
          type:"http",
          scheme:"bearer",
          bearerFormat:"JWT"
        }
      }
    },


    security:[
      {
        bearerAuth:[]
      }
    ]

  },


  apis:[
    path.resolve(__dirname, "../routers/*.js").replace(/\\/g, "/")
  ]

};



export const swaggerSpec = swaggerJSDoc(options);