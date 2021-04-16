import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CrudProducts from "./CrudProducts";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.Fragment>
        <CrudProducts />
    </React.Fragment>,
    document.getElementById("root")
);

serviceWorker.unregister();
