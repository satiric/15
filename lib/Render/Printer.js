"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsolePrinter = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Point = require("../Model/Point");

var ConsolePrinter = /*#__PURE__*/function () {
  function ConsolePrinter() {
    (0, _classCallCheck2.default)(this, ConsolePrinter);
  }

  (0, _createClass2.default)(ConsolePrinter, [{
    key: "printField",
    value: function printField(field) {
      var columnsCount = field.getColumnsCount();
      var rowsCount = field.getRowsCount();
      var data = "";

      for (var rowsIterator = 0; rowsIterator < rowsCount; rowsIterator++) {
        for (var columnsIterator = 0; columnsIterator < columnsCount; columnsIterator++) {
          var value = field.getCell(new _Point.DefaultPoint(rowsIterator, columnsIterator)).getValue();
          data += value !== null ? value : "_";
          data += " ";
        }

        data += "\n";
      }

      console.clear();
      ConsolePrinter.printData(data);
    }
  }], [{
    key: "printData",
    value: function printData(data) {
      console.log(data);
    }
  }]);
  return ConsolePrinter;
}();

exports.ConsolePrinter = ConsolePrinter;