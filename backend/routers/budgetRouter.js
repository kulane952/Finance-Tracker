import express from "express";

import {
createBudget,
getBudgets,
deleteBudget,
updateBudget
} from "../controller/budgetsController.js";


import {prodect} from "../middlewares/auth.js";


const router = express.Router();



router.post(
"/",
prodect,
createBudget
);



router.get(
"/",
prodect,
getBudgets
);



router.delete(
"/:id",
prodect,
deleteBudget
);


router.put(
"/:id",
prodect,
updateBudget
);







export default router;