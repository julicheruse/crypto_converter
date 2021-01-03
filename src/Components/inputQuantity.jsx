import React from "react";
import { useSelector } from "react-redux";

export default function InputQuantity() {
  const selectedCurrency = useSelector(
    (state) => state.Currencies.currencySelected
  );

  return (
    <form>
      <input
        type="number"
        placeholder={`Cantidad de ${selectedCurrency.key.toUpperCase()}`}
      />
      Son
      <input type="number" placeholder="Cantidad de ARS" />
    </form>
  );
}
