"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var DummyStateStorage = /*#__PURE__*/function () {
  function DummyStateStorage() {
    (0, _classCallCheck2.default)(this, DummyStateStorage);
    (0, _defineProperty2.default)(this, "field", void 0);
  }

  (0, _createClass2.default)(DummyStateStorage, [{
    key: "setField",
    value: function setField(field) {
      this.field = field;
    }
  }, {
    key: "getField",
    value: function getField() {
      return this.field;
    }
  }]);
  return DummyStateStorage;
}();

exports.default = DummyStateStorage;