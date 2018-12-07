var http = require("http");
const express = require("express");
const port = process.argv[2];
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("splash", {});
});

app.get("/game", function(req, res) {
	let username = req.param("username");
 
	res.render("game", {username: username});
});

var server = http.createServer(app);
const wss = new WebSocket.Server({ server });

var websockets = {};

setInterval(function() {
	for(let i in websockets){
		if(websockets.hasOwnProperty(i)){
			let gameObj = websockets[i];
			//if the gameObj has a final status, the game is complete/aborted
			if(gameObj.finalStatus!=null){
				console.log("\tDeleting element "+i);
				delete websockets[i];
			}
		}
	}
}, 50000);

wss.on("connection", function connection(ws)) {
	
}


app.listen(port, () => console.log(`App listening on port ${port}!`));
