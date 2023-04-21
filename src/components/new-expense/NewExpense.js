import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/index";
import { useState } from "react";
const NewExpense = ({ addExpense }) => {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const showNewExpenseHandler = () => {
    setShowNewExpense(!showNewExpense);
  };

  if (!showNewExpense) {
    return (
      <div className="new-expense">
        <button onClick={showNewExpenseHandler}>Ny utgift</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        addExpense={addExpense}
        showNewExpenseHandler={showNewExpenseHandler}
      />
    </div>
  );
};
export default NewExpense;
