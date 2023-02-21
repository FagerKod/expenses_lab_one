import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = ({ expenseData }) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const expensesYearFilterHandler = (inputYear) => {
    setSelectedYear(inputYear);
  };

  const filteredExpenses = expenseData.filter(
    ({ date }) => date.getFullYear().toString() === selectedYear
  );

  console.log("expenseData", expenseData);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilter={expensesYearFilterHandler}
        selectedYear={selectedYear}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
