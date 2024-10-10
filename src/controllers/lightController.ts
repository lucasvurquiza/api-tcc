import { Request, Response } from 'express';
import mqttService from '../services/mqttService';

export const getLightAction = (req: Request, res: Response) => {
  const action = req.query.action;

  if (action) {
    if (action === mqttService.getLightStatus()) {
      res.status(200).send(`Solicitação GET recebida. A ação permanece a mesma: ${action}`);
      return;
    }

    mqttService.setLightStatus(action as string);
    res.status(200).send(`Solicitação GET recebida. A ação agora é: ${action}`);
    return;
  }

  res.status(400).send('Falha na solicitação GET. É necessária informar a ação.');
};

export const postLightAction = (req: Request, res: Response) => {
  const { action } = req.body;

  if (action) {
    if (action === mqttService.getLightStatus()) {
      res.status(200).send(`Solicitação POST recebida. A ação permanece a mesma: ${action}`);
      return;
    }

    mqttService.setLightStatus(action);
    res.status(200).send(`Solicitação POST recebida. A ação agora é: ${action}`);
    return;
  }

  res.status(400).send('Falha na solicitação POST. É necessária informar a ação.');
};

export const getLightStatus = (req: Request, res: Response) => {
  const currentStatus = mqttService.getLightStatus();
  res.status(200).json({ status: currentStatus });
};