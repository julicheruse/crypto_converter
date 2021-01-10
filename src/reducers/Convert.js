/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  intention: "buy",
  price: {},
  criptoToFIAT: "",
  FIATToCrypto: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_BUY":
      return {
        ...state,
        intention: state.intention === "buy" ? "sell" : "buy",
      };

    case "GET_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "CHANGE_CRYPTO":
      return {
        ...state,
        criptoToFIAT:
          state.intention === "buy"
            ? action.payload / state.price.data.ask
            : action.payload / state.price.data.bid,
        FIATToCrypto: action.payload,
      };
    case "CHANGE_FIAT":
      return {
        ...state,
        criptoToFIAT: action.payload,
        FIATToCrypto:
          state.intention === "buy"
            ? action.payload * state.price.data.ask
            : action.payload * state.price.data.bid,
      };

    default:
      return state;
  }
};
