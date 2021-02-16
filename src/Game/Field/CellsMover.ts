import Field from "../../Model/Field";
import Cell from "../../Model/Cell";
import Point, {DefaultPoint} from "../../Model/Point";
import Commands from "../Enum/Commands";

export default interface CellsMover {

    moveToDirection(field: Field, cell: Cell, direction: Commands): void;

    getAllowedDirections(field: Field, cell: Cell): Array<Commands>;

}

export class DefaultCellsMover implements CellsMover {

    moveToDirection(field: Field, cell: Cell, direction: Commands) {

        const point: Point | undefined = field.findPointByCell(cell);

        const secondCell: Cell = field.getCell(this.getPointByDirection(direction, point));
        field.swap(cell, secondCell);
    }

    getAllowedDirections(field: Field, cell: Cell): Array<Commands> {

        const rowsCount: number = field.getRowsCount();
        const colsCount: number = field.getColumnsCount();

        const point: Point | undefined = field.findPointByCell(cell);
        if (point === undefined) {
            throw new Error("Can't find point");
        }
        let directions: Array<Commands> = [];
        if (point.getColumnPosition() > 0) {
            directions.push(Commands.LEFT);
        }
        if (point.getRowPosition() > 0) {
            directions.push(Commands.UP);
        }

        if (point.getColumnPosition() < colsCount - 1) {
            directions.push(Commands.RIGHT);
        }

        if (point.getRowPosition() < rowsCount - 1) {
            directions.push(Commands.DOWN);
        }
        return directions;
    }

    private getPointByDirection(direction: Commands, point: Point): Point {

        // lack of time for prettier solution
        if (direction === Commands.LEFT) {
            return new DefaultPoint(point.getRowPosition(), point.getColumnPosition() - 1);
        }

        if (direction === Commands.RIGHT) {
            return new DefaultPoint(point.getRowPosition(), point.getColumnPosition() + 1);
        }

        if (direction === Commands.UP) {
            return new DefaultPoint(point.getRowPosition() - 1, point.getColumnPosition());
        }

        return new DefaultPoint(point.getRowPosition() + 1, point.getColumnPosition());
    }
}