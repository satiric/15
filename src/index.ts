import App from "./App";
import GameStarter from "./Game/GameStarter";
import {DefaultShuffler} from "./Game/Field/Shuffler";
import {DefaultCreator} from "./Game/Field/Creator";
import DummyStateStorage from "./Game/StateStorage";
import {ConsolePrinter} from "./Render/Printer";
import DefaultInputHandler from "./Game/InputHandler";
import {DefaultCellsMover} from "./Game/Field/CellsMover";
import GameVictoryChecker from "./Game/GameVictoryChecker";

function configureDI(): App {

    //suppose to use DI instead of such manual configuring

    const cellsMover = new DefaultCellsMover();
    const shuffler = new DefaultShuffler(cellsMover);
    const creator = new DefaultCreator();
    const gameStarter = new GameStarter(creator, shuffler);
    const stateStorage = new DummyStateStorage();
    const printer = new ConsolePrinter();
    const victoryChecker = new GameVictoryChecker();
    const inputHandler = new DefaultInputHandler(cellsMover, stateStorage, victoryChecker);
    return new App(gameStarter, stateStorage, printer, inputHandler);
}


const app = configureDI();
app.launch();

const readline = require('readline'), rl = readline.createInterface(process.stdin, process.stdout);


process.stdin.on('keypress', function (s, key) {
    app.input(key.name);
});

rl.on('close', function () {
    console.log('End');
    rl.close();
    process.exit(0);
});
