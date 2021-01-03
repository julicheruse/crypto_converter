import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InputQuantity() {
  const dispatch = useDispatch();
  const selectedExchange = useSelector(
    (state) => state.Exchanges.exchangeSelected
  );
  const selectedCurrency = useSelector(
    (state) => state.Currencies.currencySelected
  );

  return (
    <form>
      <input
        type="number"
        placeholder={`Cuantos ${selectedCurrency.key.toUpperCase()}`}
      />
      Son
      <input type="number" />
    </form>
  );
}
