let modals = {
	help: document.getElementById("help-modal"),
	enterGame: document.getElementById("enter-game-modal"),
	about: document.getElementById("about-modal")
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


