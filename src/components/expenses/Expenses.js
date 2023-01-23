import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenseData }) => {
  return (
    <Card className="expenses">
      {expenseData.map((expenses, i) => (
        <ExpenseItem key={`${expenses.id}-${i}`} {...expenses} />
      ))}
    </Card>
  );
};

export default Expenses;
