import express from "express";

import {
createGoal,
getGoals,
deleteGoal
} from "../controller/goalsController.js";


import {prodect} from "../middlewares/auth.js";


const router = express.Router();



router.post(
"/",
prodect,
createGoal
);



router.get(
"/",
prodect,
getGoals
);



router.delete(
"/:id",
prodect,
deleteGoal
);



export default router;