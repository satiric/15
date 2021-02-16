"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultPoint = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DefaultPoint = /*#__PURE__*/function () {
  function DefaultPoint(rowPosition, columnPosition) {
    (0, _classCallCheck2.default)(this, DefaultPoint);
    this.rowPosition = rowPosition;
    this.columnPosition = columnPosition;
  }

  (0, _createClass2.default)(DefaultPoint, [{
    key: "getRowPosition",
    value: function getRowPosition() {
      return this.rowPosition;
    }
  }, {
    key: "getColumnPosition",
    value: function getColumnPosition() {
      return this.columnPosition;
    }
  }]);
  return DefaultPoint;
}();

exports.DefaultPoint = DefaultPoint;