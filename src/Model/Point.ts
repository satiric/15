export default interface Point {

    getRowPosition(): number;

    getColumnPosition(): number;
}

export class DefaultPoint implements Point {

    constructor(private rowPosition: number, private columnPosition: number) {

    }

    public getRowPosition(): number {

        return this.rowPosition;
    }

    public getColumnPosition(): number {

        return this.columnPosition;
    }
}