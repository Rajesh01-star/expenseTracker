// Write your code at relevant places in the code below:

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "./Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    const updatedFilteredExpenses = props.expenses.filter((eachExpense) => {
      return eachExpense.date.getFullYear().toString() === selectedYear;
    });

    setFilteredExpenses(updatedFilteredExpenses);
  };

  let expenseContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      );
    });
  }
  if (filteredExpenses.length === 1) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
          <p>Only one expense here. Please add more</p>
        </>
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
