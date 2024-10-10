import { Router } from 'express';
import { postLightAction, getLightStatus } from '../controllers/lightController';

const router = Router();

router.post('/turn-light', postLightAction);

router.get('/light-status', getLightStatus);

export default router;
