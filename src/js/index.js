//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { GameShootsContextProvider } from "./context/GameShootsContext.jsx";

//render your react application
ReactDOM.render(
    <GameShootsContextProvider >
        <Home />
    </GameShootsContextProvider>,
    document.querySelector("#app"));
