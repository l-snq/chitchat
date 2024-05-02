import { io } from "socket.io-client";

const socket = io(); // getting dat server connection, fucker 
socket.io.on("connect", () => {
	socket.emit("message1", () => {
		console.log("hallo");
	})
});
