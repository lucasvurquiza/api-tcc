import { Request, Response } from 'express';

export const getLightAction = (req: Request, res: Response) => {
  const action = req.query.action;

  if (action) {
    console.log(`200: ${action}`)
    res.status(200).send(`Requisição GET recebida. Light action is: ${action}`);
  } else {
    console.log('400: action not passed');
    res.status(400).send('Requisição GET quebrou. Action is required.');
  }
};

export const postLightAction = (req: Request, res: Response) => {
  const { action } = req.body;

  if (action) {
    console.log(`200: ${action}`)
    res.status(200).send(`Requisição POST recebida. Light action is: ${action}`);
  } else {
    console.log('400: action not passed');
    res.status(400).send('Requisição POST quebrou. Action is required.');
  }
};