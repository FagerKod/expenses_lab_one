import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Inga utgifter det året!</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expenses, i) => (
        <ExpenseItem key={`${expenses.id}-${i}`} {...expenses} />
      ))}
    </ul>
  );
};

export default ExpensesList;
