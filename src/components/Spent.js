import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Spent = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div className="alert alert-info">
      <h3>Spent so Far: ${totalExpense}</h3>
    </div>
  );
};

export default Spent;
