import { io } from "socket.io-client";

const socket = io(); // getting dat server connection, fucker 
socket.on("connection", (socket) => {
	console.log("connected");
	socket.broadcast.emit("whats up fucker");
	try {
		socket.emit("client_message", "howdy pardner!");
	} catch {
		console.log("oh fuck");
	}
	socket.on("message", (argument) => {
		console.log(argument);
	})
});

