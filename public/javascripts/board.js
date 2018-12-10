// Constructor of Board
function Board() {
	this.fields = [];
	
	this.loadImages();

	let resizeTimer;

	window.addEventListener("resize", ()=> {
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(() => {
			this.resize();
		}, 250);
	});
}

/* Create the board layout 
0: No tile
1: Standard tile
2: Blue tile
3: Orange tile
4: Yellow tile
5: Green tile
"s"-addition means it's the starting tile (colored tile with arrow on it)
*/
Board.map = [
	[0, 0, 0, 0, 0, 1, 1, "3s", 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0],
	[0, 0, 2, 2, 0, 1, 3, 1, 0, 3, 3, 0, 0],
	[0, 0, 2, 2, 0, 1, 3, 1, 0, 3, 3, 0, 0],
	[0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0],
	["2s", 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 0, 0, 0, 4, 4, 4, 4, 1],
	[1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, "4s"],
	[0, 0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0, 0],
	[0, 0, 5, 5, 0, 1, 5, 1, 0, 4, 4, 0, 0],
	[0, 0, 5, 5, 0, 1, 5, 1, 0, 4, 4, 0, 0],
	[0, 0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, "5s", 1, 1, 0, 0, 0, 0, 0]
];

Board.prototype.initCanvas = function() {
	this.buffer = document.createElement("canvas").getContext("2d"); // Set a temp canvas buffer
	this.context = document.querySelector("canvas").getContext("2d"); 

	// Set size of the temp canvas
	this.size = 144;
	this.gap = 40;
	this.buffer.canvas.width = 13 * this.size + 12 * this.gap;
	this.buffer.canvas.height = 13 * this.size + 12 * this.gap;

	this.resize();
};

Board.prototype.resetBoard = function() {
	delete this.fields;
	this.fields = [];

	/* Map through every position in the map layout and push new field */
	for (let y=0; y < Board.map.length; y++) {
		this.fields[y] = [];
		for (let x=0; x <  Board.map.length; x++) 
			if(Board.map[y][x] != 0) {
				this.fields[y].push(new Field(x*this.size + x*this.gap + this.size / 2, y*this.size + y*this.gap + this.size / 2, Board.map[y][x]));
			}
	}

	this.drawBoard();
};

Board.prototype.drawBoard = function() {

	this.fields.map((x) => { 
		x.map((y) => {
			this.buffer.drawImage(y.img, y.x - this.size / 2, y.y - this.size / 2, this.size, this.size);
		});
	});

	this.buffer.drawImage(Board.prototype.imgRiver, 5* (this.size + this.gap), 5* (this.size + this.gap), this.size * 3 + 2 * this.gap, this.size * 3 + 2 * this.gap)

	/* Rotates the canvas 45deg, to do so we have to translate the canvas so it will turn around it's center point */
	this.context.translate(this.context.canvas.width / 2, this.context.canvas.height / 2);
	this.context.rotate(45*Math.PI/180);
	this.context.translate(-this.context.canvas.width / 2, -this.context.canvas.height / 2);

	this.writeToCanvas();
};

Board.prototype.writeToCanvas = function() {
	/* When done making the buffer canvas, write it to the actual canvas */
	this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
};

Board.prototype.loadImages = function() {
	let totalImages = 15; // Total n/o images to load
	let counter = 0; // Tracks total images loaded

	Board.prototype.imgBlue = new Image();
	Board.prototype.imgBlue.onload = () => { onloadCallback(); };
	Board.prototype.imgBlue.src = "images/tiles/tile-blue@2x.png";

	Board.prototype.imgBlueArrow = new Image();
	Board.prototype.imgBlueArrow.onload = () => { onloadCallback(); };
	Board.prototype.imgBlueArrow.src = "images/tiles/tile-blue-arrow@2x.png";

	Board.prototype.imgGreen = new Image();
	Board.prototype.imgGreen.onload = () => { onloadCallback(); };
	Board.prototype.imgGreen.src = "images/tiles/tile-munt@2x.png";

	Board.prototype.imgGreenArrow = new Image();
	Board.prototype.imgGreenArrow.onload = () => { onloadCallback(); };
	Board.prototype.imgGreenArrow.src = "images/tiles/tile-munt-arrow@2x.png";

	Board.prototype.imgOrange = new Image();
	Board.prototype.imgOrange.onload = () => { onloadCallback(); };
	Board.prototype.imgOrange.src = "images/tiles/tile-oranje@2x.png";

	Board.prototype.imgOrangeArrow = new Image();
	Board.prototype.imgOrangeArrow.onload = () => { onloadCallback(); };
	Board.prototype.imgOrangeArrow.src = "images/tiles/tile-oranje-arrow@2x.png";

	Board.prototype.imgYellow = new Image();
	Board.prototype.imgYellow.onload = () => { onloadCallback(); };
	Board.prototype.imgYellow.src = "images/tiles/tile-yellow@2x.png";

	Board.prototype.imgYellowArrow = new Image();
	Board.prototype.imgYellowArrow.onload = () => { onloadCallback(); };
	Board.prototype.imgYellowArrow.src = "images/tiles/tile-yellow-arrow@2x.png";

	Board.prototype.imgNeutral1 = new Image();
	Board.prototype.imgNeutral1.onload = () => { onloadCallback(); };
	Board.prototype.imgNeutral1.src = "images/tiles/tile-neutral-1@2x.png";

	Board.prototype.imgNeutral2 = new Image();
	Board.prototype.imgNeutral2.onload = () => { onloadCallback(); };
	Board.prototype.imgNeutral2.src = "images/tiles/tile-neutral-2@2x.png";

	Board.prototype.imgRiver = new Image();
	Board.prototype.imgRiver.onload = () => { onloadCallback(); };
	Board.prototype.imgRiver.src = "images/tiles/river@2x.png";

	Board.prototype.pawnBlue = new Image();
	Board.prototype.pawnBlue.onload = () => { onloadCallback(); };
	Board.prototype.pawnBlue.src = "images/pawns/cacti@2x.png";

	Board.prototype.pawnOrange = new Image();
	Board.prototype.pawnOrange.onload = () => { onloadCallback(); };
	Board.prototype.pawnOrange.src = "images/pawns/cart@2x.png";

	Board.prototype.pawnYellow = new Image();
	Board.prototype.pawnYellow.onload = () => { onloadCallback(); };
	Board.prototype.pawnYellow.src = "images/pawns/skull@2x.png";

	Board.prototype.pawnGreen = new Image();
	Board.prototype.pawnGreen.onload = () => { onloadCallback(); };
	Board.prototype.pawnGreen.src = "images/pawns/snake@2x.png";

	// The onload callback is triggered everytime an image is loaded
	let onloadCallback = () => {
		// Increment the counter
		counter++;

		// Verify if the counter is less than the number of images
		if(counter < totalImages){
			return;
		}

		// Trigger the final callback if is the last img
		allLoadedCallback();
	};

	// The callback that is executed when all the images have been loaded
	let allLoadedCallback = () => {
		this.initCanvas();
	};
};

Board.prototype.resize = function() {

	/* Look which is smaller, either height or width of users window and set it as the width/height for the canvas */
	let canvasWidthHeight = Math.floor(Math.min(document.documentElement.clientHeight, document.documentElement.clientWidth)); 

	this.context.canvas.width = canvasWidthHeight;
	this.context.canvas.height = canvasWidthHeight;

	this.resetBoard();
};