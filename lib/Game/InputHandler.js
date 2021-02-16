"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _InvalidCommand = _interopRequireDefault(require("./Exception/InvalidCommand"));

var DefaultInputHandler = /*#__PURE__*/function () {
  function DefaultInputHandler(cellsMover, stateStorage, victoryChecker) {
    (0, _classCallCheck2.default)(this, DefaultInputHandler);
    this.cellsMover = cellsMover;
    this.stateStorage = stateStorage;
    this.victoryChecker = victoryChecker;
  }

  (0, _createClass2.default)(DefaultInputHandler, [{
    key: "handle",
    value: function handle(targetField, rawDirection) {
      var direction = rawDirection;
      var targetCell = targetField.findCellByValue(null);
      var allowedDirections = this.cellsMover.getAllowedDirections(targetField, targetCell);

      if (!allowedDirections.includes(direction)) {
        throw new _InvalidCommand.default();
      }

      this.cellsMover.moveToDirection(targetField, targetCell, direction);
      this.stateStorage.setField(targetField);

      if (this.victoryChecker.isVictory(targetField)) {
        //...well :)
        // looks strange but cause is lack of time
        throw new Error("Victory");
      }
    }
  }]);
  return DefaultInputHandler;
}();

exports.default = DefaultInputHandler;