import Cell from "./Cell";
import Point from "./Point";

export default interface Field {

    getColumnsCount(): number;

    getRowsCount(): number;

    /**
     * @throws Error point is incorrect
     */
    getCell(point: Point): Cell;

}

export interface MovableCellsField {

    /**
     * @throws Error point can't be moved
     */
    moveCell(from: Point, to: Point): void;
}


export class DefaultField implements Field, MovableCellsField {

    public constructor(private cells: Cell[][]) {

    }

    moveCell(from: Point, to: Point): void {

    }

    getColumnsCount(): number {

        return this.cells.length
    }

    getRowsCount(): number {

        let column: Cell[] | undefined = this.cells[0];
        if (column === undefined) {
            return 0;
        }
        return column.length;
    }

    /**
     * @throws Error point is incorrect
     */
    getCell(point: Point): Cell {

        let cell: Cell | undefined = this.cells[point.getRowPosition()][point.getColumnPosition()];

        if (cell === undefined) {
            throw new Error("Point is incorrect");
        }
        return cell;
    }
}