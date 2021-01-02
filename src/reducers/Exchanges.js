/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  exchanges: [
    { key: "argenbtc", name: "ArgenBTC" },
    { key: "buda", name: "Buda" },
    { key: "buenbit", name: "Buen Bit" },
    { key: "ripio", name: "Ripio" },
    { key: "satoshitango", name: "Satoshi Tango" },
  ],
  exchangeSelected: "argenbtc",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_EXCHANGE":
      return {
        ...state,
        exchangeSelected: action.payload,
      };

    default:
      return state;
  }
};
