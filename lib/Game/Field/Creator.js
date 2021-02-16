"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCreator = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Field = require("../../Model/Field");

var _Cell = require("../../Model/Cell");

var DefaultCreator = /*#__PURE__*/function () {
  function DefaultCreator() {
    (0, _classCallCheck2.default)(this, DefaultCreator);
  }

  (0, _createClass2.default)(DefaultCreator, [{
    key: "create",
    value: function create(columns, rows) {
      var cells = [];
      var currentValue = 1;
      var size = rows * columns;

      for (var columnsIterator = 0; columnsIterator < columns; columnsIterator++) {
        for (var rowsIterator = 0; rowsIterator < rows; rowsIterator++) {
          var value = currentValue !== size ? currentValue.toString() : null;

          if (cells[columnsIterator] === undefined) {
            cells[columnsIterator] = [];
          }

          cells[columnsIterator][rowsIterator] = new _Cell.DefaultCell(value);
          currentValue++;
        }
      }

      return new _Field.DefaultField(cells);
    }
  }]);
  return DefaultCreator;
}();

exports.DefaultCreator = DefaultCreator;