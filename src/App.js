// Write your code at relevant places in the code below

import Expenses from "./components/Expenses";
import NewExpense from "./NewExpenses/NewExpense";
import { useState } from "react";

function App() {
  const [expenseArray, setExpenseArray] = useState([
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", date: new Date(2024, 3, 25), title: "Book", price: 10 },
    { id: "3", date: new Date(2025, 10, 11), title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
  ]);

  const newExpenseDataHandler = (newExpenses) => {
    setExpenseArray((prevArray) => {
      return [
        ...prevArray,
        newExpenses,
      ];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseData={newExpenseDataHandler} />
      <Expenses expenses={expenseArray} />
    </div>
  );
}

export default App;


