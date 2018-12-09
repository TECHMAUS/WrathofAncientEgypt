// Constructor of Board
function Board() {
	this.fields = [];
	
	this.initCanvas();

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
	["2s", 1, 1, 1, 1, 6, 0, 0, 1, 1, 1, 1, 1],
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

Board.prototype.drawMap = function() {

	let i = 1;

	/* Map through every position in the map layout */
	for (let y=0; y < Board.map.length; y++) {
		for (let x=0; x <  Board.map.length; x++) {
			i++; // Counter used to alternate the normal tiles

			switch(Board.map[y][x]) {
			case 0: 
				break;
			case 1: 
			/* Change the neutral tile image every other tile */
				if (i % 2 == 0) {
					this.buffer.drawImage(this.imgNeutral1, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				} 
				else {
					this.buffer.drawImage(this.imgNeutral2, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				}
				break;
			case 2: 
				/* Places the tiles of the player's base on a different position */
				if ((x == 2 && (y == 2 || y == 3)) || (x == 3 && (y == 2 || y == 3)) ) {
					this.buffer.drawImage(this.imgBlue, x*this.size + x*this.gap + this.size / 1.5, y*this.size + y*this.gap + this.size / 1.5, this.size, this.size);
				} else {
					this.buffer.drawImage(this.imgBlue, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				}
				break;
			case 3: 
				/* Places the tiles of the player's base on a different position */
				if ((x == 9 && (y == 2 || y == 3)) || (x == 10 && (y == 2 || y == 3)) ) {
					this.buffer.drawImage(this.imgOrange, x*this.size + x*this.gap - this.size / 1.5, y*this.size + y*this.gap + this.size / 1.5, this.size, this.size);
				} else {
					this.buffer.drawImage(this.imgOrange, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				}
				break;
			case 4: 
				/* Places the tiles of the player's base on a different position */
				if ((x == 9 && (y == 9 || y == 10)) || (x == 10 && (y == 9 || y == 10)) ) {
					this.buffer.drawImage(this.imgYellow, x*this.size + x*this.gap - this.size / 1.5, y*this.size + y*this.gap - this.size / 1.5, this.size, this.size);
				} else {
					this.buffer.drawImage(this.imgYellow, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size); 
				}
				break;
			case 5: 
				/* Places the tiles of the player's base on a different position */
				if ((x == 2 && (y == 9 || y == 10)) || (x == 3 && (y == 9 || y == 10)) ) {
					this.buffer.drawImage(this.imgGreen, x*this.size + x*this.gap + this.size / 1.5, y*this.size + y*this.gap - this.size / 1.5, this.size, this.size);
				} else {
					this.buffer.drawImage(this.imgGreen, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				}
				break;
			case "2s": 
				this.buffer.drawImage(this.imgBlueArrow, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				break;
			case "3s": 
				this.buffer.drawImage(this.imgOrangeArrow, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				break;
			case "4s": 
				this.buffer.drawImage(this.imgYellowArrow, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				break;
			case "5s": 
				this.buffer.drawImage(this.imgGreenArrow, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size, this.size);
				break;
			case 6:
				this.buffer.drawImage(this.imgRiver, x*this.size + x*this.gap, y*this.size + y*this.gap, this.size * 3 + 2 * this.gap, this.size * 3 + 2 * this.gap);
				break;
			default: 
				break;
			}
		}
	}
	
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

	this.imgBlue = new Image();
	this.imgBlue.onload = () => { onloadCallback(); };
	this.imgBlue.src = "images/tiles/tile-blue@2x.png";

	this.imgBlueArrow = new Image();
	this.imgBlueArrow.onload = () => { onloadCallback(); };
	this.imgBlueArrow.src = "images/tiles/tile-blue-arrow@2x.png";

	this.imgGreen = new Image();
	this.imgGreen.onload = () => { onloadCallback(); };
	this.imgGreen.src = "images/tiles/tile-munt@2x.png";

	this.imgGreenArrow = new Image();
	this.imgGreenArrow.onload = () => { onloadCallback(); };
	this.imgGreenArrow.src = "images/tiles/tile-munt-arrow@2x.png";

	this.imgOrange = new Image();
	this.imgOrange.onload = () => { onloadCallback(); };
	this.imgOrange.src = "images/tiles/tile-oranje@2x.png";

	this.imgOrangeArrow = new Image();
	this.imgOrangeArrow.onload = () => { onloadCallback(); };
	this.imgOrangeArrow.src = "images/tiles/tile-oranje-arrow@2x.png";

	this.imgYellow = new Image();
	this.imgYellow.onload = () => { onloadCallback(); };
	this.imgYellow.src = "images/tiles/tile-yellow@2x.png";

	this.imgYellowArrow = new Image();
	this.imgYellowArrow.onload = () => { onloadCallback(); };
	this.imgYellowArrow.src = "images/tiles/tile-yellow-arrow@2x.png";

	this.imgNeutral1 = new Image();
	this.imgNeutral1.onload = () => { onloadCallback(); };
	this.imgNeutral1.src = "images/tiles/tile-neutral-1@2x.png";

	this.imgNeutral2 = new Image();
	this.imgNeutral2.onload = () => { onloadCallback(); };
	this.imgNeutral2.src = "images/tiles/tile-neutral-2@2x.png";

	this.imgRiver = new Image();
	this.imgRiver.onload = () => { onloadCallback(); };
	this.imgRiver.src = "images/tiles/river@2x.png";

	this.pawnBlue = new Image();
	this.pawnBlue.onload = () => { onloadCallback(); };
	this.pawnBlue.src = "images/pawns/cacti@2x.png";

	this.pawnOrange = new Image();
	this.pawnOrange.onload = () => { onloadCallback(); };
	this.pawnOrange.src = "images/pawns/cart@2x.png";

	this.pawnYellow = new Image();
	this.pawnYellow.onload = () => { onloadCallback(); };
	this.pawnYellow.src = "images/pawns/skull@2x.png";

	this.pawnGreen = new Image();
	this.pawnGreen.onload = () => { onloadCallback(); };
	this.pawnGreen.src = "images/pawns/snake@2x.png";

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
		this.drawMap();
	};
};

Board.prototype.resize = function() {

	/* Look which is smaller, either height or width of users window and set it as the width/height for the canvas */
	let canvasWidthHeight = Math.floor(Math.min(document.documentElement.clientHeight, document.documentElement.clientWidth)); 

	this.context.canvas.width = canvasWidthHeight;
	this.context.canvas.height = canvasWidthHeight;

	this.loadImages();
};

const gameBoard = new Board();