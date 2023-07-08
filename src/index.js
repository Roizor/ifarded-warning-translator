const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index')
})


server.listen(6969, () => {
	console.log('Server started on http://localhost:6969')
});