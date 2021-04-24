import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [editMode, setEditMode] = useState(false);
  const [newBudget, setNewBudget] = useState(null);

  const handleEdit = () => {
    dispatch({
      type: "EDIT_BUDGET",
      payload: newBudget,
    });
    setEditMode(false);
  };

  return editMode ? (
    <div className="alert alert-secondary d-flex justify-content-between">
      <input type="number" name="budget" id="budget" value={newBudget} onChange={(e) => setNewBudget(e.target.value)} />
      <button type="button" class="btn btn-primary" onClick={handleEdit}>
        Save
      </button>
    </div>
  ) : (
    <div className="alert alert-secondary d-flex justify-content-between">
      <h3>Budget: ${budget}</h3>
      <button type="button" class="btn btn-primary" onClick={() => setEditMode(true)}>
        Edit
      </button>
    </div>
  );
};

export default Budget;
