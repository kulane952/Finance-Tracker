import express from "express";

import { profile } from "../controller/profileController.js";

import { prodect } from "../middlewares/auth.js";

import upload from "../middlewares/profile.js";



const router = express.Router();



/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: User profile APIs
 */





/**
 * @swagger
 * /profile:
 *   post:
 *     summary: Upload user profile image
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *
 *     responses:
 *       200:
 *         description: Profile image uploaded successfully
 *
 *       401:
 *         description: Unauthorized
 */


router.post(
  "/",
  prodect,
  upload.single("image"),
  profile
);








/**
 * @swagger
 * /profile/me:
 *   get:
 *     summary: Get current logged-in user profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: User profile returned successfully
 *
 *       401:
 *         description: Unauthorized
 */


router.get(
  "/me",
  prodect,
  async (req,res)=>{

    res.status(200).json({

      success:true,

      user:req.user

    });

  }
);





export default router;