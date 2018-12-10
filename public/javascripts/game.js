let modals = {
	help: document.getElementById("help-modal"),
	exitGame: document.getElementById("exit-game-modal"),
	enterUsername: document.getElementById("enter-username-modal")
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

new Board();
new WebSocket("ws://localhost:3000");


