// each piece class will have a few things
// piece representation
// move validation function
// move notation function
class Piece {
    name;
    width = 8;
    color;
    constructor(name, color){
        if(this.constructor === Piece){
            throw new Error('Class of abstract type cant be instantiated');
        }

        if(this.isValidMove === undefined){
            throw new Error('isValidMove function must be implemented');
        }

        if(this.getPiece === undefined) {
            throw new Error('getPiece function must be implemented');
        }

        this.name = name;
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

export {Piece};