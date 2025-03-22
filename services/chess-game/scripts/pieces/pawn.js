import {pawn} from "../pieces_images.js";
import {Piece} from "./piece.js";

class Pawn extends Piece {

    startingPosition = {
        'white': [48,49,50,51,52,53,54,55],
        'black': [8,9,10,11,12,13,14,15]
    }

    constructor(name, color){
        super(name, color);

        // if the piece is white then it should move up the board (towards the higher square ids)
        if (color === 'white'){
            this.width = -this.width;
        }
    }

    isValidMove(startPositionId, targetPositionId){
        const startRow = this.startingPosition[this.color];

        /**
         * If the pawn is in the starting position, it can move two squares up the board.
         * The pawn can move one square up the board.
         * The pawn can move one square up the board diagonally if there is an opponent's piece.
         */
        return (startRow.includes(startPositionId) && startPositionId + (this.width * 2) === targetPositionId ||
            startPositionId + this.width === targetPositionId ||
            startPositionId + this.width - 1 === targetPositionId && document.querySelector(`[square-id="${startPositionId + this.width - 1}"]`).firstChild ||
            startPositionId + this.width + 1 === targetPositionId && document.querySelector(`[square-id="${startPositionId + this.width + 1}"]`).firstChild);
    }

    getPiece () {
        return pawn;
    }
}

export {Pawn};