/**
 * Class representing a single field of a game board
 * @param {Number} x    X-position
 * @param {Number} y    Y-position
 * @param {Number} type Field type
 */
const Field = function(x, y, type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.pawn = null;
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
};