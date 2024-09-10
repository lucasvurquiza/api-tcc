import { Router } from 'express';
import { getLightAction, postLightAction, getLightStatus } from '../controllers/lightController';

const router = Router();

router.get('/turn-light', getLightAction);

router.post('/turn-light', postLightAction);

router.get('/light-status', getLightStatus);

export default router;
