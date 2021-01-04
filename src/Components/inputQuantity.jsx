import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCrypto, toggleBuy } from "../actions/Convert";

export default function InputQuantity() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.Currencies.currencySelected
  );
  const intention = useSelector((state) => state.Convert.intention);
  const coinToFIAT = useSelector((state) => state.Convert.criptoToFIAT);

  const handleClick = (event) => {
    dispatch(toggleBuy());
    event.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(changeCrypto(e.target.value));
  };

  return (
    <form>
      <p>
        Ingresa la cantidad a {intention === "buy" ? "comprar" : "vender"}
        <button value={intention} onClick={handleClick}>
          {intention === "buy" ? "Vender" : "Comprar"}
        </button>
      </p>
      <input
        type="number"
        placeholder={`Cantidad de ${selectedCurrency.key.toUpperCase()}`}
        onChange={handleChange}
      />
      Son
      <input
        type="number"
        placeholder="Cantidad de ARS"
        value={coinToFIAT === "" ? "" : coinToFIAT}
      />
    </form>
  );
}
