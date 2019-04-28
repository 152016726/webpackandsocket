var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/template.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        var word = "哈哈哈" + msg;
        console.log(word);
        io.emit('chat message', word);
    })
});

http.listen(8888, function() {
    console.log('listening on *:8888');
});