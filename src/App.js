import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import ExchangeSelect from "./Components/Select";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pesos Crypto Converter</h1>
        <ExchangeSelect />
      </div>
    </Provider>
  );
}

export default App;
