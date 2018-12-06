var modals = {
	helpModal : document.getElementById("help-modal"),
	enterGameModal : document.getElementById("enter-game-modal"),
	aboutModal : document.getElementById("about-modal")
};

function toggleModalVisibility(modal) {
	Object.keys(modals).forEach(function (key) {
		var value = modals[key];
		if(value.classList.contains("open") && value != modal) {
			value.classList.toggle("open");
		}
	});
	modal.classList.toggle("open");
}


