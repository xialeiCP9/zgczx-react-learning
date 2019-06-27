import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer/index.js";
import Main from "./components/Main.js";

const middleware = [thunk];

if(process.env.MODE_ENV !== "production"){
	middleware.push(createLogger());
}
const store = createStore(reducer,applyMiddleware(...middleware));

render(
	<Provider store={store}>
		<div className="container">
			<Main />
		</div>
	</Provider>
	,
	document.getElementById("container")
);