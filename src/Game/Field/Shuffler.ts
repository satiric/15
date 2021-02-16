import Field from "../../Model/Field";
import CellsMover from "./CellsMover";

export default interface Shuffler {
    shuffle(field: Field, strength: number): void
}

export class DefaultShuffler implements Shuffler {

    constructor(private cellsMover: CellsMover) {

    }

    public shuffle(field: Field, strength: number): void {

        // such algorithm is pretty slow but this is guarantee game can be ended
        // Sam Loyd's unsolvable case for 4x4 and other unsolvable cases for X x Y

        for (let i: number = 0; i < strength; i++) {
            let targetCell = field.findCellByValue(null);
            if (targetCell === undefined) {
                throw new Error("Cannot find empty cell");
            }
            let allowedDirections = this.cellsMover.getAllowedDirections(field, targetCell);

            let direction = allowedDirections[Math.floor(Math.random() * allowedDirections.length)];
            this.cellsMover.moveToDirection(field, targetCell, direction);
        }
    }
}