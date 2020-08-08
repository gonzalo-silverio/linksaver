const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

app.use(express.static('./dist/linksaver-app'));

app.get('/*',(req, res) => {
  res.sendFile('index.html', {root: 'dist/linksaver-app/'});
});


const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));

console.log('Console Listening'); 
