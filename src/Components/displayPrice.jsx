import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPrice } from "../actions/Change";

export default function DisplayPrice() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.Exchanges.price.data);
  const selectedExchange = useSelector(
    (state) => state.Exchanges.exchangeSelected
  );
  const selectedCurrency = useSelector(
    (state) => state.Currencies.currencySelected.key
  );

  useEffect(() => {
    dispatch(getPrice(selectedExchange, selectedCurrency, 1));
  }, [dispatch, selectedCurrency, selectedExchange]);
  return (
    <div>
      <p>Venta: {price && price.bid}</p>
      <p>Compra: {price && price.ask}</p>
    </div>
  );
}
