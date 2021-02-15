import Field from "../Model/Field";
import Commands from "./Enum/Commands";
import InvalidCommand from "./Exception/InvalidCommand";

export interface InputHandler {

    handle(targetField: Field, command: string): void;

}

export default class DefaultInputHandler implements InputHandler {

    constructor() {

    }

    public handle(targetField: Field, command: string) {

        if (!(command in Commands)) {
            throw new InvalidCommand();
        }


    }
}