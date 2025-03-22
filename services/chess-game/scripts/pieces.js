import {initialBoard} from "./board.js";

// make all pieces draggable
// event handlers
let draggedPiece;
let turnNumber = 1;
let whichPlayer = 'white';
const width = 8;

const dragStartHandler = (e) => {
    draggedPiece = e.target;
}

const dragOverHandler = (e) => {
    e.preventDefault();
}

const dragDropHandler = (e) => {
    e.stopPropagation();

    const isCurrentPlayerPiece = draggedPiece.firstChild.classList.contains(whichPlayer);
    const isSquareOccupied = e.target.classList.contains('piece');
    const whichOpponent = whichPlayer === 'white' ? 'black' : 'white';
    const isSquareOccupiedByOpponent = e.target.firstChild?.classList.contains(whichOpponent);
    let valid = checkIfValidMove(e.target);

    if (isCurrentPlayerPiece) {
       // must check this first
       if (isSquareOccupiedByOpponent && valid) {
           e.target.parentNode.appendChild(draggedPiece);
           e.target.remove();
           nextTurn();
           return;
       }

       // then check if square is occupied
        if(isSquareOccupied && !isSquareOccupiedByOpponent){
            return;
        }

        if(valid){
            e.target.append(draggedPiece);
            nextTurn();
            return;
        }
    }
}

const allSquares = document.querySelectorAll("#chess-board .square");

allSquares.forEach((square) => {
    square.addEventListener('dragstart', dragStartHandler);
    square.addEventListener('dragover', dragOverHandler);
    square.addEventListener('drop', dragDropHandler);
})

const nextTurn = () => {
    if(whichPlayer === 'white') {
        whichPlayer = 'black';
    }else{
        turnNumber++;
        whichPlayer = 'white';
    }
}

const reverseBoard = () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, id) =>
        square.setAttribute('square-id', (width * width - 1) - id))
}

const revertBoard = () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, id) =>
        square.setAttribute('square-id', id))
}

const checkIfValidMove = (targetSquare) => {
    const targetPositionId = Number(targetSquare.getAttribute('square-id'))
        || Number(targetSquare.parentNode.getAttribute('square-id'));

    const startPositionId = Number(draggedPiece.parentNode.getAttribute('square-id'));

    let isValidMove = initialBoard[startPositionId].isValidMove(startPositionId, targetPositionId);
    if(isValidMove){

        //if its white turn then revert turn  before changing board ids
        if(whichPlayer === 'white'){
            revertBoard();
        }
        initialBoard[targetPositionId] = initialBoard[startPositionId];
        initialBoard[startPositionId] = '';
        if(whichPlayer === 'white'){
            reverseBoard();
        }
    }

    return isValidMove;

}
export {reverseBoard};