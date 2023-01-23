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
  return (
    <>
      <h1 className="expenses-heading">Utgiftskollen</h1>
      <NewExpense />
      <Expenses expenseData={expenseData} />
    </>
  );
};

export default App;
