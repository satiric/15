"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _InvalidCommand = _interopRequireDefault(require("./Game/Exception/InvalidCommand"));

var App = /*#__PURE__*/function () {
  function App(gameStarter, stateStorage, printer, inputHandler) {
    (0, _classCallCheck2.default)(this, App);
    this.gameStarter = gameStarter;
    this.stateStorage = stateStorage;
    this.printer = printer;
    this.inputHandler = inputHandler;
  }

  (0, _createClass2.default)(App, [{
    key: "launch",
    value: function launch() {
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      var field = this.gameStarter.start(columns, rows);
      this.stateStorage.setField(field);
      this.printer.printField(field);
    }
    /**
     * @throws Error
     */

  }, {
    key: "input",
    value: function input(key) {
      var field = this.stateStorage.getField();

      if (field === undefined) {
        throw new Error("Field is not initialized");
      }

      try {
        this.inputHandler.handle(field, key);
      } catch (e) {
        if (e instanceof _InvalidCommand.default) {
          // ignore invalid commands
          return;
        }

        throw e;
      } finally {
        this.printer.printField(field);
      }
    }
  }]);
  return App;
}();

exports.default = App;