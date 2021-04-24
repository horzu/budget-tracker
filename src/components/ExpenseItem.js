import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li id={props.id} className="list-group-item d-flex justify-content-between align-items-center">
      <span>{props.name}</span>
      <span className="badge rounded-pill bg-primary text-white ml-auto">${props.cost}</span>
      <TiDelete size="1.5em" className="ml-3" onClick={handleDelete} />
    </li>
  );
};

export default ExpenseItem;
