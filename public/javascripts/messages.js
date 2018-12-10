(function(exports)) {

    exports.T_GAME_WON_BY = "GAME-WON-BY";
    exports.O_GAME_WON_BY = {
        type: exports.T_GAME_WON_BY,
        data: null
    };

    /*
     * Server to client: abort game (e.g. if any of the four players exits the game) 
     */
    exports.O_GAME_ABORTED = {                          
        type: "GAME-ABORTED"
    };
    exports.S_GAME_ABORTED = JSON.stringify(exports.O_GAME_ABORTED);

  /*
     * Server to client: set as player BLUE 
     */
    exports.T_PLAYER_TYPE = "PLAYER-TYPE";
    exports.O_PLAYER_BLUE = {                            
        type: exports.T_PLAYER_TYPE,
        data: "BLUE"
    };
    exports.S_PLAYER_BLUE = JSON.stringify(exports.O_PLAYER_BLUE);

    /* 
     * Server to client: set as player ORANGE
     */
    exports.O_PLAYER_ORANGE = {                            
        type: exports.T_PLAYER_TYPE,
        data: "ORANGE"
    };
    exports.S_PLAYER_ORANGE = JSON.stringify(exports.O_PLAYER_ORANGE);

    /*
     * Server to client: set as player YELLOW
     */
    
    exports.O_PLAYER_YELLOW = {                            
        type: exports.T_PLAYER_TYPE,
        data: "YELLOW"
    };
    exports.S_PLAYER_YELLOW = JSON.stringify(exports.O_PLAYER_YELLOW);

    /* 
     * Server to client: set as player GREEN
     */
    exports.O_PLAYER_GREEN = {                            
        type: exports.T_PLAYER_GREEN,
        data: "GREEN"
    };
    exports.S_PLAYER_GREEN = JSON.stringify(exports.O_PLAYER_GREEN);

 /* 
     * One of the players to the server, or the server to the other three players
     */
    exports.T_MAKE_A_MOVE= "MAKE-A-MOVE";
    exports.O_MAKE_A_MOVE = {                         
        type: exports.T_MAKE_A_MOVE,
        data: null
    };
   

}(typeof exports === "undefined" ? this.Messages = {} : exports);
