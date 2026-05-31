import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { verifyUser } from '../middleware/auth.middleware.js';
import { getJobs } from '../controllers/auth.controller.js';
const router = Router();

router.post('/register', register);
router.post('/login', verifyUser, login);
router.get("/jobs", getJobs)
// router.get('/user/:username', auth, getUser);
// router.put('/update', auth, updateUser);

export default router;
