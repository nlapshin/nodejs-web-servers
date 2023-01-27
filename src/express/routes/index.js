const express = require('express');
const app = express();

/*
{
  "key": 1
} - это входной объект
*/

/*
{
  "key": "1"
} - это входной объект
*/

/*
  {
    "type": "object",
    "properties": {
      "key": {
        "type": "number",
        "required": true
      }
    }
  }
*/

// Сетевой Input/Output или I/O
// ./script.sh --key=value
app.get('/person/:id', function(req, res) => {
  // 1. Шаг обработать входные данные: парсинг + валидация
  // Валидация: JSONSchema или Joi

  // 2 Шаг. Вызвать обработчик.
  const result = await personService.getPerson(req.param.id) // входные параметры и выходные

  // 3 Шаг - Вернуть ответ
  res.send({ success: true, data: { person: result }})
})
app.post('/person', function() => {})
app.put('/person/:id', function() => {})
app.patch('/person/:id', function() => {})
app.delete('/person/:id', function() => {})


// nginx -> static HTML. Без next.js
// nginx -> next.js -> template + request to API + render -> static HTML. Без next.js
