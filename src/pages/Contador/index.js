import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addContador } from "../../store/models/contador/action";

export default function Contador() {
  const dispatch = useDispatch();
  const { contador } = useSelector(state => state.contador);

  function add() {
    dispatch(addContador());
  }

  return (
    <>
      <h1>Contador já foi acionado {contador}x</h1>
      <button onClick={add}>Contador</button>
    </>
  );
}
