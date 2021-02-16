"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var shufflingStrength = 100;

var GameStarter = /*#__PURE__*/function () {
  function GameStarter(creator, shuffler) {
    (0, _classCallCheck2.default)(this, GameStarter);
    this.creator = creator;
    this.shuffler = shuffler;
  }

  (0, _createClass2.default)(GameStarter, [{
    key: "start",
    value: function start(columns, rows) {
      var field = this.creator.create(columns, rows);
      this.shuffler.shuffle(field, shufflingStrength);
      return field;
    }
  }]);
  return GameStarter;
}();

exports.default = GameStarter;