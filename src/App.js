import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const App = () => {
  const expenseData = [
    {
      id: "e1",
      date: new Date(2023, 1, 23),
      title: "bilförsäkring",
      amount: 300,
    },
    {
      id: "e2",
      date: new Date(2023, 1, 19),
      title: "hemförsäkring",
      amount: 400,
    },
    {
      id: "e3",
      date: new Date(2023, 1, 22),
      title: "sprit",
      amount: 666,
    },
  ];
  const [expenseDataArr, setExpenseDataArr] = useState(expenseData);

  const addExpenseHandler = (newExpense) => {
    let newExpenseData = [...expenseDataArr, newExpense];
    setExpenseDataArr(newExpenseData);
  };

  console.log("expenseDataArr", expenseDataArr);

  return (
    <>
      <h1 className="expenses-heading">Utgiftskollen</h1>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses expenseData={expenseDataArr} />
    </>
  );
};

export default App;
