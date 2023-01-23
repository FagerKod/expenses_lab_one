import "./ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("sv-SE", { month: "long" });
  const day = date.toLocaleString("sv-SE", { day: "2-digit" });
  return (
    <div className="expense-date">
      <p className="expense-date__day">{day}</p>
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
    </div>
  );
};

export default ExpenseDate;
