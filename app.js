const express = require("express");
const port = 3000;
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

app.listen(port, () => console.log(`App listening on port ${port}!`));
