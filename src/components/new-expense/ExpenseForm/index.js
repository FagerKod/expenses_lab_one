import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Rubrik</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Utgift</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Datum</label>
          <input type="date" min="2023-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Lägg till utgift</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
