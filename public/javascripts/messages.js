(function(exports){

	/*
     * Server to client: set as player A 
     */
	exports.T_PLAYER_TYPE = "PLAYER-TYPE";
	exports.O_PLAYER_A = {                            
		type: exports.T_PLAYER_TYPE,
		data: "A"
	};
	exports.S_PLAYER_A = JSON.stringify(exports.O_PLAYER_A);
   

}(typeof exports === "undefined" ? this.Messages = {} : exports));
//if exports is undefined, we are on the client; else the server
