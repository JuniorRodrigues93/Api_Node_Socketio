const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
//Cada socket representa um cliente/usuário conectado no servidor.
io.on('connection', (socket) => {
    console.log('Nova Conexão', socket.id)
    socket.on('msg', (msg) => {
        console.log(msg)
        socket.broadcast.emit('msg', msg);
    })
})

server.listen(3333, function () {
    console.log('Listening on port 3333')
});