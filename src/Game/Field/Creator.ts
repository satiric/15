import Field, {DefaultField} from "../../Model/Field";
import Cell, {DefaultCell} from "../../Model/Cell";

export default interface Creator {

    create(columns: number, rows: number): Field
}

export class DefaultCreator implements Creator {

    public create(columns: number, rows: number): Field {

        let cells: Cell[][] = [];
        let currentValue: number = 1;
        const size: number = rows * columns;

        for (let columnsIterator: number = 0; columnsIterator < columns; columnsIterator++) {
            for (let rowsIterator: number = 0; rowsIterator < rows; rowsIterator++) {

                let value: string | null = (currentValue !== size)
                    ? currentValue.toString()
                    : null;
                if (cells[columnsIterator] === undefined) {
                    cells[columnsIterator] = [];
                }
                cells[columnsIterator][rowsIterator] = new DefaultCell(value);
                currentValue++;
            }
        }

        return new DefaultField(cells);
    }
}