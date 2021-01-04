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
        criptoToFIAT: action.payload * state.price.data.ask,
      };
    case "CHANGE_FIAT":
      return {
        ...state,
        FIATToCrypto: action.payload,
      };

    default:
      return state;
  }
};
