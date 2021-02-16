
import App from "./App";
import GameStarter from "./Game/GameStarter";
import {DefaultShuffler} from "./Game/Field/Shuffler";
import {DefaultCreator} from "./Game/Field/Creator";
import DummyStateStorage from "./Game/StateStorage";
import {ConsolePrinter} from "./Render/Printer";
import DefaultInputHandler from "./Game/InputHandler";
import {DefaultCellsMover} from "./Game/Field/CellsMover";

let stdin = process.openStdin();

function configureDI(): App {

    //suppose to use DI instead of such manual configuring

    const cellsMover = new DefaultCellsMover();
    const shuffler = new DefaultShuffler(cellsMover);
    const creator = new DefaultCreator();
    const gameStarter = new GameStarter(creator, shuffler);
    const stateStorage = new DummyStateStorage();
    const printer = new ConsolePrinter();
    const inputHandler = new DefaultInputHandler();
    return new App(gameStarter, stateStorage, printer, inputHandler);
}


const app = configureDI();
app.launch();

stdin.addListener("data", (data) => {
    app.input(data.toString())
});