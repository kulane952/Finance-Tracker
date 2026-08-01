import express from "express";

import { 
  getAdminAnalytics,
  getAdminDashboard,
  getAllTransactions,
  getAllUsers,
  updateUserStatus
} from "../controller/adminController.js";

import { prodect } from "../middlewares/auth.js";

import { authorize } from "../middlewares/authorize.js";




const router = express.Router();





/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management APIs
 */







/**
 * @swagger
 * /admin/dashboard:
 *   get:
 *     summary: Get admin dashboard data
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Admin dashboard returned successfully
 *
 *       403:
 *         description: Forbidden - Admin only
 */


router.get(
  "/dashboard",
  prodect,
  authorize("admin"),
  getAdminDashboard
);








/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: All users returned successfully
 *
 *       403:
 *         description: Forbidden - Admin only
 */


router.get(
  "/users",
  prodect,
  authorize("admin"),
  getAllUsers
);








/**
 * @swagger
 * /admin/transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: All transactions returned successfully
 *
 *       403:
 *         description: Forbidden - Admin only
 */


router.get(
  "/transactions",
  prodect,
  authorize("admin"),
  getAllTransactions
);








/**
 * @swagger
 * /admin/users/{id}/status:
 *   put:
 *     summary: Update user status
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 65f8b9c123456789
 *
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: active
 *
 *
 *     responses:
 *       200:
 *         description: User status updated successfully
 *
 *       403:
 *         description: Forbidden - Admin only
 */


router.put(
 "/users/:id/status",
 prodect,
 authorize("admin"),
 updateUserStatus
);








/**
 * @swagger
 * /admin/analytics:
 *   get:
 *     summary: Get admin analytics
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Analytics data returned successfully
 *
 *       403:
 *         description: Forbidden - Admin only
 */


router.get(
  "/analytics",
  prodect,
  authorize("admin"),
  getAdminAnalytics
);







export default router;