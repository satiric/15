import Field from "../Model/Field";
import Creator from "./Field/Creator";
import Shuffler from "./Field/Shuffler";

export default class GameStarter {

    public constructor(private readonly creator: Creator, private readonly shuffler: Shuffler) {

    }

    public start(columns: number, rows: number): Field {

        let field = this.creator.create(columns, rows);
        this.shuffler.shuffle(field);
        return field;
    }
}