import Field from "../../Model/Field";

export default interface Creator {
    create(columns: number, rows: number): Field
}