import {rook} from "../pieces_images.js";
import {Piece} from "./piece.js";

class Rook extends Piece {
    constructor(name, color) {
        super(name, color);
    }

    isValidMove(startPositionId, targetPositionId){
        return false;
    }

    getPiece(){
        return rook;
    }
}

export {Rook};