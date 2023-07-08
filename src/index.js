const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');

app.get('/', ({res}) => {
  res.render('pages/index');
});

app.get('/lib', ({res}) => {
	res.sendFile(require('path').resolve('./src/lib/if.js'));
});


server.listen(6969, () => {
	console.log('Server started on http://localhost:6969')
});