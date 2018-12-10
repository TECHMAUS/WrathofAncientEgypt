const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("splash", {});
});

router.get("/game", (req, res) => {
	let username = req.params.username;
 
	res.render("game", {username: username});
});

module.exports = router;