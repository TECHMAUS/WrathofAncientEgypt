const express = require("express");
var http = require("http");
const path = require("path");
const port = process.argv[2];
const routes = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views")); // this is the folder where we keep our pug files
app.set("view engine", "ejs"); // we use EJS engine

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, "public")));

// Handle our routes
app.use("/", routes);


// var server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// var websockets = {};

// setInterval(function() {
// 	for(let i in websockets){
// 		if(websockets.hasOwnProperty(i)){
// 			let gameObj = websockets[i];
// 			//if the gameObj has a final status, the game is complete/aborted
// 			if(gameObj.finalStatus!=null){
// 				console.log("\tDeleting element "+i);
// 				delete websockets[i];
// 			}
// 		}
// 	}
// }, 50000);

// wss.on("connection", function connection(ws)) {
	
// }


app.listen(port, () => console.log(`App listening on port ${port}!`));
