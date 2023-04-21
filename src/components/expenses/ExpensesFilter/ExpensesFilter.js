import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onYearFilter, selectedYear }) => {
  const inputYearHandler = (e) => {
    onYearFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="yearPicker">Filtrera år</label>
        <select
          id="yearPicker"
          onChange={inputYearHandler}
          value={selectedYear}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
