import Field from "../Model/Field";
import {DefaultPoint} from "../Model/Point";

export default interface Printer {

    printField(field: Field): void;
}

export class ConsolePrinter implements Printer {

    public printField(field: Field): void {

        const columnsCount: number = field.getColumnsCount();
        const rowsCount: number = field.getRowsCount();
        let data: string = "";

        for (let columnsIterator: number = 0; columnsIterator < columnsCount; columnsIterator++) {

            for (let rowsIterator: number = 0; rowsIterator < rowsCount; rowsIterator++) {
                let value: string | null = field.getCell(new DefaultPoint(columnsIterator, rowsIterator)).getValue();
                data += (value !== null)
                    ? value
                    : "_";
                data += " ";
            }
            data += "\n";
        }
        console.clear()
        ConsolePrinter.printData(data);
    }

    private static printData(data: string): void {

        console.log(data);
    }
}