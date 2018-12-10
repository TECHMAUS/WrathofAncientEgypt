

let modals = {
	help: document.getElementById("help-modal"),
	exitGame: document.getElementById("exit-game-modal"),
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


