import express from 'express';
import socketIo from 'socket.io';
import http from 'http';

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  // console.log('dir name', __dirname);
  res.sendFile(__dirname + '/index.html'); 
});

io.on('connection', (socket) => {
	const data = socket;
	console.log('connected!!!', data);
  const dataJson = {
    name : 'test1',
    password: 'test123',
    email: 'mar@yahho.com'
  }
  socket.emit('event', {msg: 'hello world', socketData: "dataJson"});
});

// app.use(indexRouter);

server.listen(port, () => {
  console.log(`Api is running on ${port}`);
});