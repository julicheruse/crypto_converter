import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import ExchangeSelect from "./Components/exchangeSelect";
import CurrencySelect from "./Components/currencySelect";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pesos Crypto Converter</h1>
        <span>
          Selecciona el exchange
          <ExchangeSelect />
        </span>
        <span>
          Selecciona la cripto
          <CurrencySelect />
        </span>
      </div>
    </Provider>
  );
}

export default App;
