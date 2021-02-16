"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultShuffler = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DefaultShuffler = /*#__PURE__*/function () {
  function DefaultShuffler(cellsMover) {
    (0, _classCallCheck2.default)(this, DefaultShuffler);
    this.cellsMover = cellsMover;
  }

  (0, _createClass2.default)(DefaultShuffler, [{
    key: "shuffle",
    value: function shuffle(field, strength) {
      // such algorithm is pretty slow but this is guarantee that game can be ended
      // fix Sam Loyd's unsolvable case for 4x4 and other unsolvable cases for X x Y
      for (var i = 0; i < strength; i++) {
        var targetCell = field.findCellByValue(null);

        if (targetCell === undefined) {
          throw new Error("Cannot find empty cell");
        }

        var allowedDirections = this.cellsMover.getAllowedDirections(field, targetCell);
        var direction = allowedDirections[Math.floor(Math.random() * allowedDirections.length)];
        this.cellsMover.moveToDirection(field, targetCell, direction);
      }
    }
  }]);
  return DefaultShuffler;
}();

exports.DefaultShuffler = DefaultShuffler;