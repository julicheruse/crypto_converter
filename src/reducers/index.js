import { combineReducers } from "redux";
import ExchangeReducers from "./Exchanges";

export default combineReducers({
  Exchanges: ExchangeReducers,
});
