import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrency } from "../actions/Currencies";

export default function CurrencySelect() {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.Currencies.currencies);
  const currSelect = (val) => {
    dispatch(selectCurrency(val));
  };

  return (
    <select onChange={(el) => currSelect(el.target.value)}>
      {currencies.map((curr) => (
        <option key={curr.key} value={curr.key}>
          {curr.name}
        </option>
      ))}
    </select>
  );
}
