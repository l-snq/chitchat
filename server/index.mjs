import { createServer } from "https";
import { Server } from "socket.io";

const httpsServer = createServer();
const io = new Server(httpsServer, {

});

io.on("connect", (socket) => {
	console.log(socket)
});
io.emit("message", (argument) => {
	console.log(argument)
});

httpsServer.listen(3000);

