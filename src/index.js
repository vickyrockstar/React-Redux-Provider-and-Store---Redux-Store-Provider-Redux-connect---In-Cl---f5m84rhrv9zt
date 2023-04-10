import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//code here 

import {Provider} from "react-redux";
import { creatStore} from "redux";
import reducers from "./reducers/index.js";



ReactDOM.render(
<Provider store={creatStore(reducers)}>
<App />
</Provider>, 
document.getElementById("root")
);