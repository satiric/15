import App from "./src/App";


let stdin = process.openStdin();

const app = new App();
app.launch();

stdin.addListener("data", (data) => {
    app.input(data.toString())
});