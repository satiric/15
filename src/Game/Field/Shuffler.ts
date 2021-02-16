import Field from "../../Model/Field";

export default interface Shuffler {
    shuffle(field: Field, strength: number): void
}

export class DefaultShuffler implements Shuffler{

    public shuffle(field: Field, strength: number): void {
        // such algorithm is pretty slow but this is guarantee game can be ended
        // Sam Loyd's unsolvable case for 4x4 and other unsolvable cases for X x Y

    }
}