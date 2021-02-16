"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _App = _interopRequireDefault(require("./App"));

var _GameStarter = _interopRequireDefault(require("./Game/GameStarter"));

var _Shuffler = require("./Game/Field/Shuffler");

var _Creator = require("./Game/Field/Creator");

var _StateStorage = _interopRequireDefault(require("./Game/StateStorage"));

var _Printer = require("./Render/Printer");

var _InputHandler = _interopRequireDefault(require("./Game/InputHandler"));

var _CellsMover = require("./Game/Field/CellsMover");

var _GameVictoryChecker = _interopRequireDefault(require("./Game/GameVictoryChecker"));

function configureDI() {
  //suppose to use DI instead of such manual configuring
  var cellsMover = new _CellsMover.DefaultCellsMover();
  var shuffler = new _Shuffler.DefaultShuffler(cellsMover);
  var creator = new _Creator.DefaultCreator();
  var gameStarter = new _GameStarter.default(creator, shuffler);
  var stateStorage = new _StateStorage.default();
  var printer = new _Printer.ConsolePrinter();
  var victoryChecker = new _GameVictoryChecker.default();
  var inputHandler = new _InputHandler.default(cellsMover, stateStorage, victoryChecker);
  return new _App.default(gameStarter, stateStorage, printer, inputHandler);
}

var app = configureDI();
app.launch();

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

process.stdin.on('keypress', function (s, key) {
  app.input(key.name);
});
rl.on('close', function () {
  console.log('End');
  rl.close();
  process.exit(0);
});