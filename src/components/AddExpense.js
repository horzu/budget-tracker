import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const { dispatch } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <div className="mb-5">
      <h3 className="my-3">Add Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="row justify-content-start align-items-end">
          <div className="col">
            <label for="name" className="form-label">
              Name
            </label>
            <input type="text" id="name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col">
            <label for="cost" className="form-label">
              Cost
            </label>
            <input type="text" id="cost" name="cost" className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
