const express = require("express");
const router = express.Router();
const gameStatus = require("../statTracker");

router.get("/", (req, res) => {
	res.render("splash", {
		gamesInitialized: gameStatus.gamesInitialized, 
		gamesCompleted: gameStatus.gamesCompleted,
		gamesAborted: gameStatus.gamesAborted,
		players: gameStatus.players
	});
});

router.get("/game", (req, res) => {
	res.render("game", {});
});

module.exports = router;