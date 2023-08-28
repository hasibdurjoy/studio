import "./App.css";
import HomePage from "./Pages/HomePage";
import WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ["Roboto:300,400,500,700&display=swap"],
    },
});

function App() {
    return (
        <div>
            <HomePage />
        </div>
    );
}

export default App;
