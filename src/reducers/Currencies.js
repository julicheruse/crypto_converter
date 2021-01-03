/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  currencies: [
    { key: "btc", name: "Bitcoin (BTC)" },
    { key: "eth", name: "Ethereum (ETH)" },
    { key: "dai", name: "DAI" },
    { key: "usdt", name: "Tether (USDT)" },
    { key: "usdc", name: "USDCoin (USDC)" },
  ],
  currencySelected: { key: "btc", name: "Bitcoin (BTC)" },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CRYPTO":
      return {
        ...state,
        currencySelected: state.currencies.filter(
          (c) => c.key === action.payload
        )[0],
      };

    default:
      return state;
  }
};
