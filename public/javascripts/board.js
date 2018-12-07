const Board = function() {
	this.init();
};

Board.map = [
	[0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 0],
	[0, 0, 2, 2, 0, 1, 3, 1, 0, 3, 3, 0, 0],
	[0, 0, 2, 2, 0, 1, 3, 1, 0, 3, 3, 0, 0],
	[0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0],
	[1, 2, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 0, 0, 0, 4, 4, 4, 4, 1],
	[1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 4, 1],
	[0, 0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0, 0],
	[0, 0, 5, 5, 0, 1, 5, 1, 0, 4, 4, 0, 0],
	[0, 0, 5, 5, 0, 1, 5, 1, 0, 4, 4, 0, 0],
	[0, 0, 0, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
];

Board.prototype.init = function() {
	this.buffer = document.createElement("canvas").getContext("2d");
	this.context = document.querySelector("canvas").getContext("2d");
	this.size = 32;
	this.buffer.canvas.width = 13 * this.size;
	this.buffer.canvas.height = 13 * this.size;

	this.resize();
};

Board.prototype.drawMap = function() {
	const imgBlue = new Image();
	const imgOrange = new Image();
	const imgYellow = new Image();
	const imgMunt = new Image();
	const imgNeutral1 = new Image();
	const imgNeutral2 = new Image();

	const draw = () => {
		for (let x=0; x < Board.map.length; x++) {
			for (let y=0; y <  Board.map.length; y++) {
				switch(Board.map[y][x]) {
				case 0: break;
				case 1: this.buffer.fillStyle=this.buffer.createPattern(imgNeutral1, "repeat"); this.buffer.fillRect(x*this.size, y*this.size, this.size, this.size); break;
				case 2: this.buffer.fillStyle=this.buffer.createPattern(imgBlue, "repeat"); this.buffer.fillRect(x*this.size, y*this.size, this.size, this.size); break;
				case 3: this.buffer.fillStyle=this.buffer.createPattern(imgOrange, "no-repeat"); this.buffer.fillRect(x*this.size, y*this.size, this.size, this.size); break;
				case 4: this.buffer.fillStyle=this.buffer.createPattern(imgYellow, "no-repeat"); this.buffer.fillRect(x*this.size, y*this.size, this.size, this.size); break;
				case 5: this.buffer.fillStyle=this.buffer.createPattern(imgMunt, "no-repeat"); this.buffer.fillRect(x*this.size, y*this.size, this.size, this.size); break;
				default: break;
				}
			}
		}
		console.log(imgBlue);
		this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
	};

	const onloadCallback = function() {
		counter++;

		if (counter < totalImages) {
			return;
		}

		draw();
	};

	// Create the flag variables (counter and total of images)
	let counter = 0;
	const totalImages = 6;

	imgBlue.onload = onloadCallback();
	imgBlue.src = "images/tiles/tile-blue@2x.png";

	imgOrange.onload = onloadCallback();
	imgOrange.src = "images/tiles/tile-oranje@2x.png";

	imgYellow.onload = onloadCallback();
	imgYellow.src = "images/tiles/tile-yellow@2x.png";

	imgMunt.onload = onloadCallback();
	imgMunt.src = "images/tiles/tile-munt@2x.png";

	imgNeutral1.onload = onloadCallback();
	imgNeutral1.src = "images/tiles/tile-neutral-1@2x.png";

	imgNeutral2.onload = onloadCallback();
	imgNeutral2.src = "images/tiles/tile-neutral-2@2x.png";
};

Board.prototype.resize = function() {
	this.context.canvas.width = Math.floor(document.documentElement.clientWidth - 32);

	if (this.context.canvas.width > document.documentElement.clientHeight) {
		this.context.canvas.width = Math.floor(document.documentElement.clientHeight);
	}

	this.context.canvas.height = Math.floor(this.context.canvas.width);

	this.drawMap();
};
	
// window.addEventListener("resize", resize, {passive:true});

// resize();
