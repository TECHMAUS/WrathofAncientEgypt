const express = require("express");
const path = require("path");
const port = process.argv[2];
const routes = require("./routes/index");
const http = require("http");
const websocket = require("ws");
// const game = require("./game");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views")); // this is the folder where we keep our pug files
app.set("view engine", "ejs"); // we use EJS engine

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, "public")));

// Handle our routes
app.use("/", routes);


const server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};//property: websocket, value: game

wss.on("connection", function(ws) {
	//let's slow down the server response time a bit to make the change visible on the client side
	setTimeout(function() {
		console.log("Connection state: "+ ws.readyState);
		ws.send("Thanks for the message. --Your server.");
		ws.close();
		console.log("Connection state: "+ ws.readyState);
	}, 2000);

	ws.on("message", function incoming(message) {
		console.log("[LOG] " + message);
	});
});


server.listen(port, () => console.log(`App listening on port ${port}!`));
