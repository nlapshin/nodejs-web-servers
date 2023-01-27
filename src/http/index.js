const http = require('http');

const port = 6000;

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
});

server.listen(port, function() {
  console.log(`Server listening for connection requests on socket localhost: ${port}`);
});















// express, fastify, koa, hapi
// adonis, restify
// nestjs, feathers
// meteorJS

// react: создаем компоненты
// vue: vue компоненты + routing + немного архитектуры
// angular: компоненты + routing + много архитектуры


// express, fastify, koa, hapi

// koa есть роутинг?
// koa - это реализация middleware патерна + парсинг request и удобный интерфейс для response 
// express = koa + роутинг
// fastify, hapi = express + система плагинов. Fastify быстрее остальных.

// adonis - MVC
// nestjs, feathers - это платформа для создание API серверов. NestJS - angular на бэкенде.
// Services, Contorllers и т.д.

// meteorJS - Javascript + NodeJS + MongoDB
