const express = require('express');
const app = express();
/*
app.get('/hello/:name', function (req, res) {
  const queryEntities = Object.entries(req.query);

  res.send(`Hello ${req.params.name}. QS: ${queryEntities.join(',')}`);
})
*/
/*
app.get('/person/:id', function() => {})
app.post('/person', function() => {})
app.put('/person/:id', function() => {})
app.patch('/person/:id', function() => {})
app.delete('/person/:id', function() => {})
*/

/*
app.use(express.json())

app.post('/hello', (req, res) => {
  console.log('req.body', req.body);

  res.sendStatus(200);
})
*/

const server = app.listen(4000, '0.0.0.0', function () {
  const host = server.address().address
  const port = server.address().port
   
  console.log("Example app listening at http://%s:%s", host, port)
})
