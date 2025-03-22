import {knight} from "../pieces_images.js";
import {Piece} from "./piece.js";

class Knight extends Piece {
    constructor(name, color){
        super(name, color);

    }

    isValidMove(startPositionId, targetPositionId){
        return startPositionId + this.width * 2 - 1 === targetPositionId ||
            startPositionId + this.width * 2 + 1 === targetPositionId ||
            startPositionId + this.width - 2 === targetPositionId ||
            startPositionId + this.width + 2 === targetPositionId ||
            startPositionId - this.width * 2 - 1 === targetPositionId ||
            startPositionId - this.width * 2 + 1 === targetPositionId ||
            startPositionId - this.width - 2 === targetPositionId ||
            startPositionId - this.width + 2 === targetPositionId;
    }

    getPiece () {
        return knight;
    }
}

export {Knight};