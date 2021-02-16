export default interface Cell {

    getValue(): string | null
}

export class DefaultCell implements Cell {

    public constructor(private value: string | null) {

    }

    public getValue(): string | null {

        return this.value;
    }
}