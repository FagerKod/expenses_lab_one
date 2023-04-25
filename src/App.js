import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

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
      <header className="expenses-header">
        <h3>Ett sätt att hålla koll på dina utgifter</h3>
        <p>Lägg till en ny utgift när du slösat mer av din lön</p>
      </header>
      <main>
        <NewExpense addExpense={addExpenseHandler} />
        <Expenses expenseData={expenseDataArr} />
      </main>
      <footer className="expenses-footer">
        <a href="http://arbetsformedlingen.se/">Arbetsförmedlingen</a>
        <a tabIndex="1" href="https://www.skatteverket.se/">
          Skatteverket
        </a>
      </footer>
    </>
  );
};

export default App;

const EXPENSE_DATA = [
  {
    id: "e0",
    date: new Date(2019, 0, 22),
    title: "motorsåg",
    amount: 399,
  },
  {
    id: "e1",
    date: new Date(2019, 1, 10),
    title: "gräsklippare",
    amount: 199,
  },
  {
    id: "e2",
    date: new Date(2019, 2, 5),
    title: "högtalare",
    amount: 299,
  },
  {
    id: "e3",
    date: new Date(2019, 3, 15),
    title: "kaffemaskin",
    amount: 99,
  },
  {
    id: "e4",
    date: new Date(2019, 4, 20),
    title: "mikrovågsugn",
    amount: 249,
  },
  {
    id: "e5",
    date: new Date(2019, 5, 12),
    title: "blender",
    amount: 79,
  },
  {
    id: "e6",
    date: new Date(2019, 6, 28),
    title: "dammsugare",
    amount: 349,
  },
  {
    id: "e7",
    date: new Date(2019, 7, 8),
    title: "krukväxter",
    amount: 59,
  },
  {
    id: "e8",
    date: new Date(2019, 8, 18),
    title: "skrivare",
    amount: 129,
  },
  {
    id: "e9",
    date: new Date(2019, 9, 7),
    title: "stekpanna",
    amount: 39,
  },
  {
    id: "e10",
    date: new Date(2019, 10, 25),
    title: "klockradio",
    amount: 89,
  },
  {
    id: "e11",
    date: new Date(2019, 11, 14),
    title: "lampa",
    amount: 19,
  },
  {
    id: "e12",
    date: new Date(2020, 0, 5),
    title: "spis",
    amount: 599,
  },
  {
    id: "e13",
    date: new Date(2020, 1, 21),
    title: "tvättmaskin",
    amount: 799,
  },
  {
    id: "e14",
    date: new Date(2020, 2, 10),
    title: "torktumlare",
    amount: 699,
  },
  {
    id: "e15",
    date: new Date(2020, 3, 30),
    title: "espressomaskin",
    amount: 249,
  },
  {
    id: "e16",
    date: new Date(2020, 4, 18),
    title: "dvd-spelare",
    amount: 59,
  },
  {
    id: "e17",
    date: new Date(2021, 0, 10),
    title: "Hemförsäkring",
    amount: 1500,
  },
  {
    id: "e18",
    date: new Date(2021, 1, 15),
    title: "Måltidsersättning",
    amount: 300,
  },
  {
    id: "e19",
    date: new Date(2022, 2, 3),
    title: "Gymkort",
    amount: 500,
  },
  {
    id: "e20",
    date: new Date(2022, 3, 22),
    title: "Internet",
    amount: 400,
  },
  {
    id: "e21",
    date: new Date(2023, 4, 8),
    title: "Bilservice",
    amount: 1200,
  },
  {
    id: "e22",
    date: new Date(2023, 5, 17),
    title: "Present",
    amount: 250,
  },
  {
    id: "e23",
    date: new Date(2023, 6, 1),
    title: "Resa",
    amount: 2000,
  },
  {
    id: "e24",
    date: new Date(2023, 7, 12),
    title: "Sjukvårdskostnader",
    amount: 800,
  },
  {
    id: "e25",
    date: new Date(2023, 8, 5),
    title: "Böcker",
    amount: 350,
  },
  {
    id: "e26",
    date: new Date(2023, 9, 18),
    title: "Spel",
    amount: 500,
  },
];
