import { Request, Response } from 'express';
import mqtt from 'mqtt';

const client = mqtt.connect('mqtts://b2d02679853943659923c9331daaca7e.s1.eu.hivemq.cloud:8883', {
  username: 'metanumbersiot',
  password: 'metaNumb3rs'
});

let lightStatus = 'off';

client.on('connect', () => {
  console.log('Conectado ao HiveMQ Cloud com sucesso!');

  client.subscribe('metanumbers/room/light/status', (err) => {
    if (err) {
      console.error('Erro ao se inscrever no tópico MQTT:', err);
    } else {
      console.log('Inscrito com sucesso no tópico home/lights/status');
    }
  });
});

client.on('error', (err) => {
  console.error('Erro de conexão com o HiveMQ Cloud:', err);
});

const publishToMQTT = (topic: string, message: string) => {
  client.publish(topic, message, (error) => {
    if (error) {
      console.error('Erro ao publicar no tópico MQTT:', error);
    } else {
      console.log(`Mensagem publicada no tópico ${topic}: ${message}`);
    }
  });
};

client.on('message', (topic, message) => {
  if (topic === 'metanumbers/room/light/status') {
    lightStatus = message.toString();  // Armazena o último status da luz
    console.log(`Status da luz atualizado pelo MQTT: ${lightStatus}`);
  }
});

const readLightStatus = (): any => {
  return lightStatus;
};

const writeLightStatus = (status: string) => {
  lightStatus = status

  publishToMQTT('metanumbers/room/light/status', status);
};

export const getLightAction = (req: Request, res: Response) => {
  const action = req.query.action;

  if (action) {
    if (action === lightStatus) {
      res.status(200).send(`POST request received. Action of light is gone: ${action}`);
      return
    }
  
    writeLightStatus(action as string);

    res.status(200).send(`GET request received. Light action is now: ${action}`);
    return;
  }
  res.status(400).send(`GET request failed. Action is required.`);
};

export const postLightAction = (req: Request, res: Response) => {
  const { action } = req.body;

  if (action) {
    if (action === lightStatus) {
      res.status(200).send(`POST request received. Action of light is gone: ${action}`);
      return
    }

    writeLightStatus(action);

    res.status(200).send(`POST request received. Light action is now: ${action}`);
    return;
  }
  res.status(400).send('POST request failed. Action is required.');
};

export const getLightStatus = (req: Request, res: Response) => {
  const currentStatus = readLightStatus();
  res.status(200).json({ status: currentStatus });
};
