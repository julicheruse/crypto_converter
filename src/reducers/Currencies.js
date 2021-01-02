/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  currencies: [
    { key: "btc", name: "Bitcoin (BTC)" },
    { key: "eth", name: "Ethereum (ETH)" },
    { key: "dai", name: "DAI" },
    { key: "usdt", name: "Tether (USDT)" },
    { key: "usdc", name: "USDCoin (USDC)" },
  ],
  currencySelected: "btc",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CRYPTO":
      return {
        ...state,
        currencySelected: action.payload,
      };

    default:
      return state;
  }
};
