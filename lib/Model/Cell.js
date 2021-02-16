"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCell = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DefaultCell = /*#__PURE__*/function () {
  function DefaultCell(value) {
    (0, _classCallCheck2.default)(this, DefaultCell);
    this.value = value;
  }

  (0, _createClass2.default)(DefaultCell, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);
  return DefaultCell;
}();

exports.DefaultCell = DefaultCell;