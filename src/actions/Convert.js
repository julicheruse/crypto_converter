import Axios from "axios";

export function getPrice(exchange, coin, vol) {
  return (dispatch) => {
    return Axios(
      `https://criptoya.com/api/${exchange}/${coin}/ars/${vol}`
    ).then((json) => {
      dispatch({ type: "GET_PRICE", payload: json });
    });
  };
}
export function toggleBuy() {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_BUY", payload: "buy" });
  };
}
export function changeCrypto(coin) {
  return (dispatch) => {
    dispatch({ type: "CHANGE_CRYPTO", payload: coin });
  };
}
