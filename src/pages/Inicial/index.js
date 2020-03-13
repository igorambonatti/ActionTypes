import React from "react";

import { useSelector } from "react-redux";

export default function Inicial() {
  const { contador } = useSelector(state => state.contador);
  return (
    <>
      <h1>O ESTADO JA FOI COMPARTILHADO {contador} VEZES</h1>
    </>
  );
}
