import { dbService } from "fBase";
import React, { useState } from "react";
import CurrencyInput from "react-currency-input";
import { useHistory } from "react-router-dom";

function NewBudget() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function onChange(e) {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      dbService.collection("budgets").add({
        name: name,
        price: price,
        createdAt: Date.now(),
      });
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setPrice(0);
    history.push("/");
  }

  return (
    <div>
      New Budget
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          required
          value={name}
          onChange={onChange}
        />
        <CurrencyInput
          value={price}
          onChange={(e) => setPrice(e)}
          precision={0}
        />
        <input type="submit" value="Done" />
      </form>
    </div>
  );
}

export default NewBudget;
