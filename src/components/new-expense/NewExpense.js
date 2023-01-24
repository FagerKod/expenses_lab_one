import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/index";
const NewExpense = ({ addExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};
export default NewExpense;
