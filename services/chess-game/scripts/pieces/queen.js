import {queen} from "../pieces_images.js";
import {Piece} from "./piece.js";

class Queen extends Piece{
    constructor(name, color) {
        super(name, color);
    }

    isValidMove(startPositionId, targetPositionId){
        return false;
    }

    getPiece(){
        return queen;
    }
}

export {Queen};