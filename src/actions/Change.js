import Axios from "axios";

export function getPrice(exchange, coin, vol) {
  return (dispatch) => {
    console.log("e" + coin);
    return Axios(
      `https://criptoya.com/api/${exchange}/${coin}/ars/${vol}`
    ).then((json) => {
      console.log("hoal");
      dispatch({ type: "GET_PRICE", payload: json });
    });
  };
}
