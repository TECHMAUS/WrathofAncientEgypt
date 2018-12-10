/* every game has two players, identified by their WebSocket */
function Game(gameID) {
	this.players = [];
	this.id = gameID;
	this.gameState = "0 JOINT";
}

Game.prototype.addPlayer = function(p) {

	console.assert(p instanceof Object, "%s: Expecting an object (WebSocket), got a %s", arguments.callee.name, typeof p);

	if(this.players.length < 4) {
		this.players.push(p);
		switch(this.players.length) {
		case 1:
			this.gameState = "1 JOINT";
			return "BLUE";
		case 2:
			this.gameState = "2 JOINT";
			return "ORANGE";
		case 3:
			this.gameState = "3 JOINT";
			return "YELLOW";
		case 4:
			this.gameState = "4 JOINT";
			return "GREEN";
		default:
			break;
		}
	} 
	else {
		return new Error("Already 4 players!");
	}
};

Game.prototype.hasFourConnectedPlayers = function() {
	return (this.players.length == 4);
};

module.exports = Game;