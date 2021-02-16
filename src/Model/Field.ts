import Cell from "./Cell";
import Point, {DefaultPoint} from "./Point";

export default interface Field {

    getColumnsCount(): number;

    getRowsCount(): number;

    /**
     * @throws Error point is incorrect
     */
    getCell(point: Point): Cell;

    findPointByCellValue(value: string | null): Point | undefined;

    findPointByCell(cell: Cell): Point | undefined;

    findCellByValue(value: string | null): Cell | undefined;

    swap(firstCell: Cell, secondCell: Cell): void;
}

export class DefaultField implements Field {

    public constructor(private cells: Cell[][]) {

    }

    public findPointByCellValue(value: string | null): Point | undefined {

        const rowsCount: number = this.getRowsCount();
        const columnsCount: number = this.getColumnsCount();

        for (let columnsIterator: number = 0; columnsIterator < columnsCount; columnsIterator++) {
            for (let rowsIterator: number = 0; rowsIterator < rowsCount; rowsIterator++) {

                let cell = this.cells[rowsIterator][columnsIterator];
                if (cell.getValue() === value) {
                    return new DefaultPoint(rowsIterator, columnsIterator);
                }
            }
        }
    }

    public findCellByValue(value: string | null): Cell | undefined {

        const rowsCount: number = this.getRowsCount();
        const columnsCount: number = this.getColumnsCount();

        for (let columnsIterator: number = 0; columnsIterator < columnsCount; columnsIterator++) {
            for (let rowsIterator: number = 0; rowsIterator < rowsCount; rowsIterator++) {

                let cell = this.cells[rowsIterator][columnsIterator];
                if (cell.getValue() === value) {
                    return cell;
                }
            }
        }
    }

    public swap(firstCell: Cell, secondCell: Cell): void {

        let firstPoint: Point = this.findPointByCellValue(firstCell.getValue());
        let secondPoint: Point = this.findPointByCellValue(secondCell.getValue());
        this.cells[firstPoint.getRowPosition()][firstPoint.getColumnPosition()] = secondCell;
        this.cells[secondPoint.getRowPosition()][secondPoint.getColumnPosition()] = firstCell;
    }

    public findPointByCell(cell: Cell): Point | undefined {

        return this.findPointByCellValue(cell.getValue());
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

        let cell: Cell | undefined = this.findCell(point);

        if (cell === undefined) {
            throw new Error("Point is incorrect");
        }
        return cell;
    }

    private findCell(point: Point): Cell | undefined {

        return this.cells[point.getRowPosition()][point.getColumnPosition()];
    }
}