import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCrypto, changeFiat, toggleBuy } from "../actions/Convert";

export default function InputQuantity() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.Currencies.currencySelected
  );
  const intention = useSelector((state) => state.Convert.intention);
  const coinToFIAT = useSelector((state) => state.Convert.criptoToFIAT);
  const FIATToCrypto = useSelector((state) => state.Convert.FIATToCrypto);

  const handleClick = (event) => {
    dispatch(toggleBuy());

    event.preventDefault();
  };
  const handleFIATChange = (e) => {
    console.log(e);
    dispatch(changeFiat(e.target.value));
  };
  const handleCoinChange = (e) => {
    console.log(e);
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
        name="coin"
        type="number"
        placeholder="Cantidad de ARS"
        value={FIATToCrypto === "" ? "" : FIATToCrypto}
        onChange={handleCoinChange}
      />
      Son
      <input
        name="fiat"
        type="number"
        placeholder={`Cantidad de ${selectedCurrency.key.toUpperCase()}`}
        value={coinToFIAT === "" ? "" : coinToFIAT}
        onChange={handleFIATChange}
      />
    </form>
  );
}
