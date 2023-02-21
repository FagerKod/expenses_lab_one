import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
const EXPENSE_DATA = [
  {
    id: "e0",
    date: new Date(2019, 0, 22),
    title: "motorsåg",
    amount: 399,
  },
  {
    id: "e1",
    date: new Date(2023, 1, 23),
    title: "bilförsäkring",
    amount: 300,
  },
  {
    id: "e2",
    date: new Date(2022, 2, 19),
    title: "hemförsäkring",
    amount: 400,
  },
  {
    id: "e3",
    date: new Date(2023, 3, 22),
    title: "sprit",
    amount: 666,
  },
];
const App = () => {
  const [expenseDataArr, setExpenseDataArr] = useState(EXPENSE_DATA);

  const addExpenseHandler = (newExpense) => {
    setExpenseDataArr((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <>
      <h1 className="expenses-heading">Utgiftskollen</h1>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses expenseData={expenseDataArr} />
    </>
  );
};

export default App;
