import {king} from "../pieces_images.js";
import {Piece} from "./piece.js";

class King extends Piece{
    constructor(name, color) {
        super(name, color);
    }

    isValidMove(startPositionId, targetPositionId){
        return false;
    }

    getPiece(){
        return king;
    }
}

export {King};