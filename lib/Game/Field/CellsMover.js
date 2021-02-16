"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCellsMover = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Point = require("../../Model/Point");

var _Commands = _interopRequireDefault(require("../Enum/Commands"));

var DefaultCellsMover = /*#__PURE__*/function () {
  function DefaultCellsMover() {
    (0, _classCallCheck2.default)(this, DefaultCellsMover);
  }

  (0, _createClass2.default)(DefaultCellsMover, [{
    key: "moveToDirection",
    value: function moveToDirection(field, cell, direction) {
      var point = field.findPointByCell(cell);
      var secondCell = field.getCell(this.getPointByDirection(direction, point));
      field.swap(cell, secondCell);
    }
  }, {
    key: "getAllowedDirections",
    value: function getAllowedDirections(field, cell) {
      var rowsCount = field.getRowsCount();
      var colsCount = field.getColumnsCount();
      var point = field.findPointByCell(cell);

      if (point === undefined) {
        throw new Error("Can't find point");
      }

      var directions = [];

      if (point.getColumnPosition() > 0) {
        directions.push(_Commands.default.LEFT);
      }

      if (point.getRowPosition() > 0) {
        directions.push(_Commands.default.UP);
      }

      if (point.getColumnPosition() < colsCount - 1) {
        directions.push(_Commands.default.RIGHT);
      }

      if (point.getRowPosition() < rowsCount - 1) {
        directions.push(_Commands.default.DOWN);
      }

      return directions;
    }
  }, {
    key: "getPointByDirection",
    value: function getPointByDirection(direction, point) {
      // lack of time for prettier solution
      if (direction === _Commands.default.LEFT) {
        return new _Point.DefaultPoint(point.getRowPosition(), point.getColumnPosition() - 1);
      }

      if (direction === _Commands.default.RIGHT) {
        return new _Point.DefaultPoint(point.getRowPosition(), point.getColumnPosition() + 1);
      }

      if (direction === _Commands.default.UP) {
        return new _Point.DefaultPoint(point.getRowPosition() - 1, point.getColumnPosition());
      }

      return new _Point.DefaultPoint(point.getRowPosition() + 1, point.getColumnPosition());
    }
  }]);
  return DefaultCellsMover;
}();

exports.DefaultCellsMover = DefaultCellsMover;