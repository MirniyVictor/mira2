import { Router } from 'express';
import { getAll } from '../controllers/servers.js';
const router = Router();

router.get('/api/servers', getAll);

export default router;