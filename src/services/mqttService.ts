// mqttService.ts
import mqtt from 'mqtt';

class MqttService {
  private client: mqtt.MqttClient;
  private lightStatus = 'off';

  constructor() {
    this.client = mqtt.connect('mqtts://b2d02679853943659923c9331daaca7e.s1.eu.hivemq.cloud:8883', {
      username: 'metanumbersiot',
      password: 'metaNumb3rs'
    });

    this.client.on('connect', () => {
      console.log('Conectado ao HiveMQ Cloud com sucesso!');
      this.subscribeToTopic('metanumbers/room/light/status');
    });

    this.client.on('message', (topic, message) => {
      if (topic === 'metanumbers/room/light/status') {
        this.lightStatus = message.toString();
        console.log(`Status da luz atualizado pelo MQTT: ${this.lightStatus}`);
      }
    });

    this.client.on('error', (err) => {
      console.error('Erro de conexão com o HiveMQ Cloud:', err);
    });
  }

  private subscribeToTopic(topic: string) {
    this.client.subscribe(topic, (err) => {
      if (err) {
        console.error(`Erro ao se inscrever no tópico ${topic}:`, err);
      } else {
        console.log(`Inscrito com sucesso no tópico ${topic}`);
      }
    });
  }

  public publishMessage(topic: string, message: string) {
    this.client.publish(topic, message, (error) => {
      if (error) {
        console.error(`Erro ao publicar no tópico ${topic}:`, error);
      } else {
        console.log(`Mensagem publicada no tópico ${topic}: ${message}`);
      }
    });
  }

  public getLightStatus(): string {
    return this.lightStatus;
  }

  public setLightStatus(status: string) {
    this.lightStatus = status;
    this.publishMessage('metanumbers/room/light/status', status);
  }
}

const mqttService = new MqttService();
export default mqttService;
