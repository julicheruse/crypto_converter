export function selectExchange(exchange) {
  return (dispatch) => {
    dispatch({ type: "SELECT_EXCHANGE", payload: exchange });
  };
}
