import Field from "../Model/Field";
import Commands from "./Enum/Commands";
import InvalidCommand from "./Exception/InvalidCommand";
import CellsMover from "./Field/CellsMover";
import Cell from "../Model/Cell";
import {StateStorage} from "./StateStorage";
import GameVictoryChecker from "./GameVictoryChecker";

export interface InputHandler {

    handle(targetField: Field, command: string): void;

}

export default class DefaultInputHandler implements InputHandler {

    constructor(
        private cellsMover: CellsMover,
        private stateStorage: StateStorage,
        private victoryChecker: GameVictoryChecker) {

    }

    public handle(targetField: Field, rawDirection: string): void {

        let direction: Commands = <Commands>rawDirection;
        let targetCell: Cell = targetField.findCellByValue(null);
        let allowedDirections = this.cellsMover.getAllowedDirections(targetField, targetCell);

        if (!allowedDirections.includes(direction)) {
            throw new InvalidCommand();
        }
        this.cellsMover.moveToDirection(targetField, targetCell, direction);
        this.stateStorage.setField(targetField);
        if (this.victoryChecker.isVictory(targetField)) {
            //...well :)
            // looks strange but the cause is lack of time
            throw new Error("Victory");
        }
    }
}