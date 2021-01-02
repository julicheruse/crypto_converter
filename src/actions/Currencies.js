export function selectCurrency(currency) {
  return (dispatch) => {
    dispatch({ type: "SELECT_CRYPTO", payload: currency });
  };
}
