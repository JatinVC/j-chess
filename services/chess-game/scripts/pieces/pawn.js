import {pawn} from "../pieces_images.js";
import {Piece} from "./piece.js";

class Pawn extends Piece {
    constructor(name, color){
        super(name, color);

    }

    isValidMove(startPositionId, targetPositionId){
        const startRow = [8,9,10,11,12,13,14,15];
        return !!(startRow.includes(startPositionId) && startPositionId + (this.width * 2) === targetPositionId ||
            startPositionId + this.width === targetPositionId ||
            startPositionId + this.width - 1 === targetPositionId && document.querySelector(`[square-id="${startPositionId + this.width - 1}"]`).firstChild ||
            startPositionId + this.width + 1 === targetPositionId && document.querySelector(`[square-id="${startPositionId + this.width + 1}"]`).firstChild);

    }

    getPiece () {
        return pawn;
    }
}

export {Pawn};