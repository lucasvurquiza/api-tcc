import { Request, Response } from 'express';

let lightStauts = 'off';

const readLightStatus = (): any => {
  return lightStauts;
};

const writeLightStatus = (status: string) => {
  lightStauts = status
};

export const getLightAction = (req: Request, res: Response) => {
  const action = req.query.action;

  if (action) {
    writeLightStatus(action as string);

    res.status(200).send(`GET request received. Light action is now: ${action}`);
  } else {
    res.status(400).send(`GET request failed. Action is required.`);
  }
};

export const postLightAction = (req: Request, res: Response) => {
  const { action } = req.body;

  if (action) {
    writeLightStatus(action);

    res.status(200).send(`POST request received. Light action is now: ${action}`);
  } else {
    res.status(400).send('POST request failed. Action is required.');
  }
};

export const getLightStatus = (req: Request, res: Response) => {
  const currentStatus = readLightStatus();
  res.status(200).json({ status: currentStatus });
};
