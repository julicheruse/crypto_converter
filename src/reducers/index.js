import { combineReducers } from "redux";
import ExchangeReducers from "./Exchanges";
import CurrencyReducers from "./Currencies";

export default combineReducers({
  Exchanges: ExchangeReducers,
  Currencies: CurrencyReducers,
});
