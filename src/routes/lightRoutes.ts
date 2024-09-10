import { Router } from 'express';
import { getLightAction, postLightAction } from '../controllers/lightController';

const router = Router();

router.get('/turn-light', getLightAction);

router.post('/turn-light', postLightAction);

export default router;