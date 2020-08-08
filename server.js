const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

//app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(${__dirname}/linksaver-app/dist/));

app.get('*',(req, res) => {
  //res.sendFile(path.join(__dirname+'/dist/index.html'));
  res.sendFile(`./linksaver-app/dist/index.html`);
});


const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));

console.log('Console Listening'); 
