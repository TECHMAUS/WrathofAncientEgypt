const Board = function() {
	this.fields = [];
	this.reset();
};

Board.prototype.reset = function() {
	this.buffer = document.createElement("canvas").getContext("2d");
	this.context = document.querySelector("canvas").getContext("2d");

	const map = [
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

	delete this.fields;
	this.fields = [];

	const size = 144;

	this.buffer.canvas.width = 13 * size;
	this.buffer.canvas.height = 13 * size;

	for (let x=0; x < map.length; x++) {
		for (let y=0; y <  map.length; y++) {
			switch(map[x][y]) {
			case 0: break;
			case 1: this.buffer.fillStyle="#FF0000"; this.buffer.fillRect(x*size, y*size, size, size); break;
			case 2: this.buffer.fillStyle="#eee"; this.buffer.fillRect(x*size, y*size, size, size); break;
			case 3: this.buffer.fillStyle="#444"; this.buffer.fillRect(x*size, y*size, size, size); break;
			case 4: this.buffer.fillStyle="#999"; this.buffer.fillRect(x*size, y*size, size, size); break;
			case 5: this.buffer.fillStyle="#000"; this.buffer.fillRect(x*size, y*size, size, size); break;
			default: break;
			}
		}
	}

	this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);

};


