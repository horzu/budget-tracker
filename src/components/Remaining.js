import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const isOver = totalExpense > budget ? "alert alert-danger" : "alert alert-success";

  return (
    <div className={isOver}>
      <h3>Remaining: ${budget - totalExpense}</h3>
    </div>
  );
};

export default Remaining;
