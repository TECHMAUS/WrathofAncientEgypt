const express = require("express");
const path = require("path");
const port = process.argv[2];
const routes = require("./routes/index");
const http = require("http");
const websocket = require("ws");
const Game = require("./game");
const gameStatus = require("./statTracker");
const messages = require("./public/javascripts/messages");

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

let websockets = {}; //property: websocket, value: game
let currentGame = new Game(++gameStatus.gamesInitialized);
let connectionID = 1; //each websocket receives a unique ID

// /*
//  * regularly clean up the websockets object
//  */ 
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

wss.on("connection", function(ws) {

	/*
     * four-player game: every four players are added to the same game
     */
	let con = ws; 
	con.id = connectionID++;
	let playerType = currentGame.addPlayer(con);
	
	websockets[con.id] = currentGame;

	console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerType);

	/*
     * once we have four players, there is no way back; 
     * a new game object is created;
     * if a player now leaves, the game is aborted (player is not preplaced)
     */ 
	if (currentGame.hasFourConnectedPlayers()) {
		currentGame = new Game(++gameStatus.gamesInitialized);
	}

	con.on("close", function(code) {
	
		/*
			* code 1001 means almost always closing initiated by the client;
			* source: https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
			*/
		console.log(con.id + " disconnected with code " + code + "...");
		currentGame = new Game(++gameStatus.gamesInitialized);
	
	});

});


server.listen(port, () => console.log(`App listening on port ${port}!`));
