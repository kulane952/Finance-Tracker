import express  from 'express';
import { getUserss } from '../controller/users.js';

const router = express.Router();


router.get('/',getUserss)


//export the router
export default router;