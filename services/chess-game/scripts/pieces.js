import {initialBoard} from "./board.js";

// make all pieces draggable
// event handlers

const WHITE = 'white';
const BLACK = 'black';

let draggedPiece;
let turnNumber = 1;
let whichPlayer = WHITE;
const width = 8;

const nextTurn = () => {
    if(whichPlayer === WHITE) {
        whichPlayer = BLACK;
    }else{
        turnNumber++;
        whichPlayer = WHITE;
    }
}

const checkIfValidMove = (startPositionId, targetPositionId) => {
    return initialBoard[startPositionId].isValidMove(startPositionId, targetPositionId);
}

/**
 * Reverses the board for the white player, since the first 16 pieces are black and the last 16 pieces are white.
 */
const reverseBoard = () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, id) =>
        square.setAttribute('square-id', (width * width - 1) - id))
}

/**
 * Reverts the board back to its original state. where the first 16 pieces are black and the last 16 pieces are white.
 */
const resetBoard = () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, id) =>
        square.setAttribute('square-id', id))
}

/**
 * Updates the board array with the new position of the piece.
 * @param startPositionId - the id of the square where the piece was before moving
 * @param targetPositionId - the id of the square where the piece is moved
 */
const updateBoard = (startPositionId, targetPositionId) => {
    // if its white turn then reset board turn before moving the piece
    if(whichPlayer === WHITE){
        resetBoard();
    }

    initialBoard[targetPositionId] = initialBoard[startPositionId];
    initialBoard[startPositionId] = '';

    if(whichPlayer === WHITE){
        reverseBoard();
    }
}

const dragStartHandler = (e) => {
    draggedPiece = e.target;
}

const dragOverHandler = (e) => {
    e.preventDefault();
}

/**
 * After user drops the piece on the target square, we need to check if the move is valid.
 * @param e - event object
 */
const dragDropHandler = (e) => {
    e.stopPropagation();

    const isCurrentPlayerPiece = draggedPiece.firstChild.classList.contains(whichPlayer);
    const isSquareOccupied = e.target.classList.contains('piece');

    // Check if the piece is of the current player
    if (isCurrentPlayerPiece) {
        const whichOpponent = whichPlayer === WHITE ? BLACK : WHITE;
        const isSquareOccupiedByOpponent = e.target.firstChild?.classList.contains(whichOpponent);

        let targetSquare = e.target;

        const targetPositionId = Number(targetSquare.getAttribute('square-id'))
            || Number(targetSquare.parentNode.getAttribute('square-id'));

        const startPositionId = Number(draggedPiece.parentNode.getAttribute('square-id'));

        let valid = checkIfValidMove(startPositionId, targetPositionId);

        // If square is occupied by opponent, and move is valid, then remove the opponent piece and append the dragged piece
        if (isSquareOccupiedByOpponent && valid) {
            e.target.remove();
            e.target.parentNode.appendChild(draggedPiece);
            updateBoard(startPositionId, targetPositionId);
            nextTurn();
            return;
        }

        // then check if square is occupied by current player piece
        if(isSquareOccupied && !isSquareOccupiedByOpponent){
            return;
        }

        // if square is not occupied by any piece, then append the dragged piece
        if(valid){
            e.target.append(draggedPiece);
            updateBoard(startPositionId, targetPositionId);
            nextTurn();
        }
    }
}

const allSquares = document.querySelectorAll("#chess-board .square");

allSquares.forEach((square) => {
    square.addEventListener('dragstart', dragStartHandler);
    square.addEventListener('dragover', dragOverHandler);
    square.addEventListener('drop', dragDropHandler);
})

export {reverseBoard};