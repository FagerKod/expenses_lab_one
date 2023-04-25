import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ addExpense, showNewExpenseHandler }) => {
  const [expenseInput, setExpenseInput] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const formInputHandler = (e) => {
    e.preventDefault();
    setExpenseInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitExpense = (e) => {
    e.preventDefault();
    const submitData = {
      title: expenseInput.title,
      amount: +expenseInput.amount, // + gör det till nummer
      date: new Date(expenseInput.date),
    };
    const submitDataWithId = { ...submitData, id: Math.random().toString() };
    addExpense(submitDataWithId);
    setExpenseInput({
      title: "",
      amount: 0,
      date: "",
    });
    showNewExpenseHandler();
  };

  return (
    <form onSubmit={submitExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Rubrik</label>
          <input
            type="text"
            id="expense-title"
            name="title"
            value={expenseInput.title}
            onChange={formInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-amount">Utgift</label>
          <input
            type="number"
            id="expense-amount"
            name="amount"
            min="0.01"
            step="0.01"
            value={expenseInput.amount}
            onChange={formInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-date">Datum</label>
          <input
            type="date"
            id="expense-date"
            name="date"
            min="2023-01-01"
            max="2024-12-31"
            value={expenseInput.date}
            onChange={formInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={showNewExpenseHandler}>Avbryt</button>
        <button type="submit">Lägg till utgift</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
