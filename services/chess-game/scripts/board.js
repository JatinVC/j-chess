import {
    rook,
    knight,
    bishop,
    queen,
    king,
    pawn} from "./pieces.js";

const chess_board = document.getElementById('chess-board');

// need to make an 8x8 chessboard with alternating colours

const width = 8;

const initialBoard = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

const create_board = () => {
    initialBoard.forEach((piece, i) => {
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('square-id', i);
        square.innerHTML = piece;

        const row = Math.floor((63 - i) / 8) + 1

        if(row%2 === 0){
            square.classList.add(i%2===0 ? 'beige' : 'brown');
        }else{
            square.classList.add(i%2===0 ? 'brown' : 'beige');

        }

        chess_board.appendChild(square);
    })
}

create_board();

export {chess_board}