import React from "react";
import ReactDOM from "react-dom";
import App from './App';
//import fake backend
import {configureFakeBackend} from './helpers/history';


import * as serviceWorker from './services/serviceWorker';
//import font awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCarCrash, faSmog, faChartLine, faSmileWink} from "@fortawesome/free-solid-svg-icons";

//configure fontawesome icons used
library.add(faCarCrash, faSmog, faChartLine, faSmileWink);
dom.watch();
// setup fake backend
// configureFakeBackend();
//setup the entire app
ReactDOM.render(<App/>, document.getElementById("root"));
//better performance for app once downloaded
serviceWorker.unregister();
