import GameStarter from "./Game/GameStarter";
import Field from "./Model/Field";
import {StateStorage} from "./Game/StateStorage";
import Printer from "./Render/Printer";
import {InputHandler} from "./Game/InputHandler";
import InvalidCommand from "./Game/Exception/InvalidCommand";


export default class App {

    public constructor(
        private readonly gameStarter: GameStarter,
        private readonly stateStorage: StateStorage,
        private readonly printer: Printer,
        private readonly inputHandler: InputHandler
    ) {

    }

    public launch(columns: number = 4, rows: number = 4): void {

        let field: Field = this.gameStarter.start(columns, rows);
        this.stateStorage.setField(field);
        this.printer.printField(field);
    }

    /**
     * @throws Error
     */
    public input(key: string): void {

        let field: Field | undefined = this.stateStorage.getField();

        if (field === undefined) {
            throw new Error("Field is not initialized");
        }
        try {
            this.inputHandler.handle(field, key);
        } catch (e) {
            if (e instanceof InvalidCommand) {
                // ignore invalid commands
                return;
            }
            throw e;
        }
    }
}