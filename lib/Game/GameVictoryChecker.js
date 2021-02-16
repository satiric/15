"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Point = require("../Model/Point");

var GameVictoryChecker = /*#__PURE__*/function () {
  function GameVictoryChecker() {
    (0, _classCallCheck2.default)(this, GameVictoryChecker);
  }

  (0, _createClass2.default)(GameVictoryChecker, [{
    key: "isVictory",
    value: function isVictory(field) {
      var targetPoint = field.findPointByCellValue(null);

      if (targetPoint.getColumnPosition() === field.getColumnsCount() - 1 && targetPoint.getRowPosition() === field.getRowsCount() - 1) {
        return this.fullCheck(field);
      }

      return false;
    }
  }, {
    key: "fullCheck",
    value: function fullCheck(field) {
      var columnsCount = field.getColumnsCount();
      var rowsCount = field.getRowsCount();
      var iterableResult = 0;

      for (var rowsIterator = 0; rowsIterator < rowsCount; rowsIterator++) {
        for (var columnsIterator = 0; columnsIterator < columnsCount; columnsIterator++) {
          var value = field.getCell(new _Point.DefaultPoint(rowsIterator, columnsIterator)).getValue();

          if (value !== null && parseInt(value) - iterableResult !== 1) {
            return false;
          }

          iterableResult++;
        }
      }

      return true;
    }
  }]);
  return GameVictoryChecker;
}();

exports.default = GameVictoryChecker;