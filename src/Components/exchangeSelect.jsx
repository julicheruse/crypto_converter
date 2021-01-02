import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExchange } from "../actions/Exchanges";

export default function ExchangeSelect() {
  const dispatch = useDispatch();
  const exchanges = useSelector((state) => state.Exchanges.exchanges);
  const exSelect = (val) => {
    dispatch(selectExchange(val));
  };

  return (
    <select className="select" onChange={(el) => exSelect(el.target.value)}>
      {exchanges.map((ex) => (
        <option key={ex.key} value={ex.key}>
          {ex.name}
        </option>
      ))}
    </select>
  );
}
