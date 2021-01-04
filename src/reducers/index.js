import { combineReducers } from "redux";
import ExchangeReducers from "./Exchanges";
import CurrencyReducers from "./Currencies";
import ConvertReducers from "./Convert";

export default combineReducers({
  Exchanges: ExchangeReducers,
  Currencies: CurrencyReducers,
  Convert: ConvertReducers,
});
