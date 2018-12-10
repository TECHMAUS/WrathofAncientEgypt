let modals = {
	help: document.getElementById("help-modal"),
	exitGame: document.getElementById("exit-game-modal"),
	enterUsername: document.getElementById("enter-username-modal"),
};

function toggleModalVisibility(modal) {
	Object.keys(modals).forEach(function (key) {
		let value = modals[key];
		if(value.classList.contains("open") && value != modal) {
			value.classList.remove("open");
		}
	});
	modal.classList.toggle("open");
}

const gameBoard = new Board();

var socket = new WebSocket("ws://localhost:3000");
socket.onmessage = function(event){
	console.log(event.data);
};

socket.onopen = function(){
	socket.send("Hello from the client!");
};


