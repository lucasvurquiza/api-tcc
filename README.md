# Middleware MetaIoT

## O Middleware Meta-IoT foi desenvolvido com o propósito de processar e gerenciar dados de diversas fontes, atendendo às necessidades de um Gêmeo Digital de um ambiente integrando tecnologias IoT e o protocolo MQTT

### Tecnologias

- NodeJS
- CORS
- Express
- MQTT

#### NodeJS

O NodeJS é uma plataforma de JavaScript que permite a criação de aplicações de rede que rodam no lado do servidor. Ele é executado no servidor e é responsável por gerenciar a comunicação entre o cliente e o servidor.

#### CORS

O CORS (Cross-Origin Resource Sharing) é um mecanismo de controle de acesso que permite que um aplicativo web se comunique com outros aplicativos web de outras origens. Ele é usado para permitir que o aplicativo web seja acessado por outros aplicativos web, independentemente de sua origem.

#### Express

Express é um framework de aplicações web para Node.js. Ele fornece uma estrutura de rotas, middlewares e métodos para criar aplicações web de alta performance.

#### MQTT

MQTT (Message Queuing Telemetry Transport) é um protocolo de comunicação de mensagens baseado em rede que permite a transmissão de dados entre dispositivos e sistemas. Ele é usado para transmitir dados de sensores, dispositivos móveis e sistemas de automação.

### Estrutura do projeto

#### controllers

Controllers são responsáveis por lidar com as solicitações HTTP e retornar uma resposta. Eles são responsáveis por lidar com a lógica de negócio e manipular os dados recebidos.

#### services

Serviços são responsáveis por lidar com a lógica de negócio e manipular os dados recebidos. Eles são responsáveis por lidar com a comunicação com o MQTT e armazenar os dados.

#### routes

As rotas são responsáveis por definir as rotas do aplicativo e mapear as solicitações HTTP para os controladores e serviços.

#### app.ts

Este arquivo é responsável por configurar o servidor e definir as rotas da aplicação.

#### index.ts

Este arquivo é responsável por executar o servidor e definir as portas.

### Como executar

```bash
npm install
npm start ou npm run dev
```

#### npm install

Instala as dependências do projeto.

#### npm start

Inicia o servidor e exibe a mensagem de sucesso na tela.

#### npm run dev

Inicia o servidor e exibe a mensagem de sucesso na tela, além de iniciar o monitoramento de alterações no código-fonte.

### Como usar

#### POST

```
/turn-light
```

##### Parâmetros

- action: Ação a ser executada no dispositivo. Valores possíveis: on, off.

##### Retorno

- 200: Solicitação realizada com sucesso.
- 400: Falha na solicitação.

#### GET

```
/light-status
```

##### Retorno

- 200: Retorna o status atual do dispositivo.

## Referências

[Express](https://expressjs.com)

[MQTT](https://www.npmjs.com/package/mqtt)

[NodeJS](https://nodejs.org/en)