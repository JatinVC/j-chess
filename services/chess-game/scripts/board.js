import {Pawn} from "./pieces/pawn.js";
import {Knight} from "./pieces/knight.js";
import {Bishop} from "./pieces/bishop.js";
import {Rook} from "./pieces/rook.js";
import {Queen} from "./pieces/queen.js";
import {King} from "./pieces/king.js";

const chess_board = document.getElementById('chess-board');

// need to make an 8x8 chessboard with alternating colours

const initialBoard = [
    new Rook('Rook', 'black'), new Knight('Knight', 'black'), new Bishop('Bishop', 'black'), new Queen('Queen', 'black'), new King('King', 'black'), new Bishop('Bishop', 'black'), new Knight('Knight', 'black'), new Rook('Rook', 'black'),
    new Pawn('Pawn', 'black'), new Pawn('Pawn', 'black'), new Pawn('Pawn', 'black'), new Pawn('Pawn', 'black'), new Pawn('Pawn', 'black'), new Pawn('Pawn', 'black'), new Pawn('Pawn', 'black'), new Pawn('Pawn', 'black'),
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    new Pawn('Pawn', 'white'), new Pawn('Pawn', 'white'), new Pawn('Pawn', 'white'), new Pawn('Pawn', 'white'), new Pawn('Pawn', 'white'), new Pawn('Pawn', 'white'), new Pawn('Pawn', 'white'), new Pawn('Pawn', 'white'),
    new Rook('Rook', 'white'), new Knight('Knight', 'white'), new Bishop('Bishop', 'white'), new Queen('Queen', 'white'), new King('King', 'white'), new Bishop('Bishop', 'white'), new Knight('Knight', 'white'), new Rook('Rook', 'white'),
]

const createBoard = () => {
    initialBoard.forEach((piece, i) => {
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('square-id', i);

        if(piece !== ''){
            square.innerHTML = piece.getPiece();
        }

        square.firstChild?.setAttribute('draggable', true);

        const row = Math.floor((63 - i) / 8) + 1

        if(row%2 === 0){
            square.classList.add(i%2===0 ? 'beige' : 'brown');
        }else{
            square.classList.add(i%2===0 ? 'brown' : 'beige');
        }

        if(piece !== ''){
            square.firstChild.firstChild.classList.add(piece.getColor());
        }

        chess_board.appendChild(square);
    })
}

createBoard();

export {chess_board, initialBoard}