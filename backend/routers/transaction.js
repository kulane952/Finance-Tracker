import express from "express";

import { 
createTransaction,
deleteTransaction,
getCategories,
getDashboard,
getTransaction,
monthlySummary,
updateTransaction
} from "../controller/transactionsController.js";

import { prodect } from "../middlewares/auth.js";


const router = express.Router();



/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Transaction management APIs
 */


/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Create new transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - type
 *
 *             properties:
 *               title:
 *                 type: string
 *                 example: Shopping
 *
 *               amount:
 *                 type: number
 *                 example: 100
 *
 *               type:
 *                 type: string
 *                 example: expense
 *
 *               category:
 *                 type: string
 *                 example: Food
 *
 *               date:
 *                 type: string
 *                 format: date
 *
 *     responses:
 *       201:
 *         description: Transaction created successfully
 */


router.post(
"/",
prodect,
createTransaction
);






/**
 * @swagger
 * /transaction:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Transactions fetched successfully
 */


router.get(
"/",
prodect,
getTransaction
);







/**
 * @swagger
 * /transaction/{id}:
 *   put:
 *     summary: Update transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *     responses:
 *       200:
 *         description: Transaction updated successfully
 */


router.put(
"/:id",
prodect,
updateTransaction
);








/**
 * @swagger
 * /transaction/{id}:
 *   delete:
 *     summary: Delete transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Transaction deleted successfully
 */


router.delete(
"/:id",
prodect,
deleteTransaction
);








/**
 * @swagger
 * /transaction/monthly-summary:
 *   get:
 *     summary: Get monthly transaction summary
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Monthly summary returned
 */


router.get(
"/monthly-summary",
prodect,
monthlySummary
);








/**
 * @swagger
 * /transaction/categories:
 *   get:
 *     summary: Get transaction categories
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Categories returned
 */


router.get(
"/categories",
prodect,
getCategories
);








/**
 * @swagger
 * /transaction/dashboard:
 *   get:
 *     summary: Get transaction dashboard data
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Dashboard data returned
 */


router.get(
"/dashboard",
prodect,
getDashboard
);





export default router;