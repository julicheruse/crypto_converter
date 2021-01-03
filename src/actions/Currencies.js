export function selectCurrency(currency, exchange, coin, vol) {
  return (dispatch) => {
    dispatch({ type: "SELECT_CRYPTO", payload: currency });
  };
}
