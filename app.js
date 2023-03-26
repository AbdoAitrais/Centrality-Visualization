const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/data.json', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname + '/city_graph.geojson');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/degreeCentrality.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
