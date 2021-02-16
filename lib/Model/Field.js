"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultField = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Point = require("./Point");

var DefaultField = /*#__PURE__*/function () {
  function DefaultField(cells) {
    (0, _classCallCheck2.default)(this, DefaultField);
    this.cells = cells;
  }

  (0, _createClass2.default)(DefaultField, [{
    key: "findPointByCellValue",
    value: function findPointByCellValue(value) {
      var rowsCount = this.getRowsCount();
      var columnsCount = this.getColumnsCount();

      for (var columnsIterator = 0; columnsIterator < columnsCount; columnsIterator++) {
        for (var rowsIterator = 0; rowsIterator < rowsCount; rowsIterator++) {
          var _cell = this.cells[rowsIterator][columnsIterator];

          if (_cell.getValue() === value) {
            return new _Point.DefaultPoint(rowsIterator, columnsIterator);
          }
        }
      }
    }
  }, {
    key: "findCellByValue",
    value: function findCellByValue(value) {
      var rowsCount = this.getRowsCount();
      var columnsCount = this.getColumnsCount();

      for (var columnsIterator = 0; columnsIterator < columnsCount; columnsIterator++) {
        for (var rowsIterator = 0; rowsIterator < rowsCount; rowsIterator++) {
          var _cell2 = this.cells[rowsIterator][columnsIterator];

          if (_cell2.getValue() === value) {
            return _cell2;
          }
        }
      }
    }
  }, {
    key: "swap",
    value: function swap(firstCell, secondCell) {
      var firstPoint = this.findPointByCellValue(firstCell.getValue());
      var secondPoint = this.findPointByCellValue(secondCell.getValue());
      this.cells[firstPoint.getRowPosition()][firstPoint.getColumnPosition()] = secondCell;
      this.cells[secondPoint.getRowPosition()][secondPoint.getColumnPosition()] = firstCell;
    }
  }, {
    key: "findPointByCell",
    value: function findPointByCell(cell) {
      return this.findPointByCellValue(cell.getValue());
    }
  }, {
    key: "getColumnsCount",
    value: function getColumnsCount() {
      return this.cells.length;
    }
  }, {
    key: "getRowsCount",
    value: function getRowsCount() {
      var column = this.cells[0];

      if (column === undefined) {
        return 0;
      }

      return column.length;
    }
    /**
     * @throws Error point is incorrect
     */

  }, {
    key: "getCell",
    value: function getCell(point) {
      var cell = this.findCell(point);

      if (cell === undefined) {
        throw new Error("Point is incorrect");
      }

      return cell;
    }
  }, {
    key: "findCell",
    value: function findCell(point) {
      return this.cells[point.getRowPosition()][point.getColumnPosition()];
    }
  }]);
  return DefaultField;
}();

exports.DefaultField = DefaultField;