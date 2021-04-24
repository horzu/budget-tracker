import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const Expenses = () => {
  const { expenses } = useContext(AppContext);
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h3>Expenses</h3>
      <input
        type="text"
        name="filter"
        id="filter"
        className="form-control mb-3"
        placeholder="Type to search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className="list-group">
        {expenses
          .map((item) => <ExpenseItem id={item.id} name={item.name} cost={item.cost} />)
          .filter((item) => item.props.name.toLowerCase().includes(filter))}
      </ul>
    </div>
  );
};

export default Expenses;
