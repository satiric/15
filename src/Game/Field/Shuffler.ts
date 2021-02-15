import Field from "../../Model/Field";

export default interface Shuffler {
    shuffle(field: Field): void
}