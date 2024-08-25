import {
    rook,
    knight,
    bishop,
    queen,
    king,
    pawn} from "./pieces_images.js";

const chess_board = document.getElementById('chess-board');

// need to make an 8x8 chessboard with alternating colours

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

const createBoard = () => {
    initialBoard.forEach((piece, i) => {
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('square-id', i);
        square.innerHTML = piece;

        square.firstChild?.setAttribute('draggable', true);

        const row = Math.floor((63 - i) / 8) + 1

        if(row%2 === 0){
            square.classList.add(i%2===0 ? 'beige' : 'brown');
        }else{
            square.classList.add(i%2===0 ? 'brown' : 'beige');
        }

        if (i <= 15) {
            square.firstChild.firstChild.classList.add('black');
        }

        if(i > 47) {
            square.firstChild.firstChild.classList.add('white');
        }

        chess_board.appendChild(square);
    })
}

createBoard();

export {chess_board}