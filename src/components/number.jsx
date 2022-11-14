import { useState } from "react";
import React from "react";
import "./number.css";

export default function RandomNumber() {
  const [firstNumber, setFirstNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  function handleNumber() {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setFirstNumber(newNumber);
  }
  return (
    <div>
      <h1>{firstNumber}</h1>
      <button
        onClick={() => {
          handleNumber();
        }}
      >
        Numero Aleatório
      </button>
    </div>
  );
}
