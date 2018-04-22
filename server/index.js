const server = require('http').createServer(),
    io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.broadcast.emit('incoming', 'user connected');
    socket.on('disconnect', () => io.emit('incoming', 'user disconnected'));
    socket.on('chat message', msg => io.emit('incoming', msg));
});

server.listen(3002, () => console.log('listening on *:3002'));
