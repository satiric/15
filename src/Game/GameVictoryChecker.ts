import Field from "../Model/Field";
import Point, {DefaultPoint} from "../Model/Point";


export default class GameVictoryChecker {

    public isVictory(field: Field): boolean {

        let targetPoint: Point = field.findPointByCellValue(null);
        if (targetPoint.getColumnPosition() === field.getColumnsCount() - 1
            && targetPoint.getRowPosition() === field.getRowsCount() - 1) {
            return this.fullCheck(field);
        }
        return false;
    }

    private fullCheck(field: Field): boolean {

        const columnsCount: number = field.getColumnsCount();
        const rowsCount: number = field.getRowsCount();
        let iterableResult: number = 0;
        for (let rowsIterator: number = 0; rowsIterator < rowsCount; rowsIterator++) {

            for (let columnsIterator: number = 0; columnsIterator < columnsCount; columnsIterator++) {
                let value: string | null = field.getCell(new DefaultPoint(rowsIterator, columnsIterator)).getValue();
                if (value !== null && parseInt(value) - iterableResult !== 1) {
                    return false;
                }
                iterableResult++;
            }
        }
        return true;
    }
}