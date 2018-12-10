/**
 * Class representing a single field of a game board
 * @param {Number} x    X-position (center point)
 * @param {Number} y    Y-position (center point)
 * @param {Number} type Field type
 */
const Field = function(x, y, type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.pawn = null;
	this.img = fieldImg(this.type);

	function fieldImg(type) {
		switch(type) {
		case 1:
			return Board.prototype.imgNeutral1;
		case 2:
			return Board.prototype.imgBlue;
		case "2s":
			return Board.prototype.imgBlueArrow;
		case 3:
			return Board.prototype.imgOrange;
		case "3s":
			return Board.prototype.imgOrangeArrow;
		case 4:
			return Board.prototype.imgYellow;
		case "4s":
			return Board.prototype.imgYellowArrow;
		case 5:
			return Board.prototype.imgGreen;
		case "5s":
			return Board.prototype.imgGreenArrow;
		default:
			break;
		}
	}
};

/**
 * Returns the pawn that is standing on this field
 * @return {Object} Either pawn or null
 */
Field.prototype.getPawn = function () {
	return this.pawn;
};

/**
 * Set/unset pawn standing on this field
 * @param {Object} [pawn] Pawn
 */
Field.prototype.setPawn = function (pawn) {
	this.pawn = pawn || null;
}; balblalbalblalbl