import Field from "../Model/Field";

export interface StateStorage {

    setField(field: Field): void;
    getField(): Field;

}

export default class DummyStateStorage implements StateStorage {

    private field: Field;


    public setField(field: Field): void {
        this.field = field;
    }

    public getField(): Field|undefined {
        return this.field;
    }
}