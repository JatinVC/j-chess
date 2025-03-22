import {Piece} from "./piece.js";
import {bishop} from "../pieces_images.js";

class Bishop extends Piece{
    constructor(name, color){
        super(name, color);
    }

    isValidMove(startPositionId, targetPositionId){
        return false;
    }

    getPiece(){
        return bishop;
    }
}

export {Bishop};