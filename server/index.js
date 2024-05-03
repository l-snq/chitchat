const express = require("express");
const app = express();
const http = require("http"); 
// ^ this wont work if i use https because of its security. Look into that more later
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
	console.log("someone has connected");
	socket.on("chat message", (msg) => {
		console.log("message: " + msg);
	});
	socket.on("disconnect", () => {
		console.log("someone has disconnected");
	});
});

server.listen(3000, () => {
	console.log("socket.io is listening on *:3000");
});

