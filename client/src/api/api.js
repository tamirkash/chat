import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

export const subscribeToChat = (cb) => {
    socket.on('incoming', msg => cb(null, msg));
};

export const sendMsg = (msg) => {
    socket.emit('chat message', msg);
};