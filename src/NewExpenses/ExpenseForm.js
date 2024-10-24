import React, { useState } from "react";
import "./ExpenseForm.css";

const initialData = {
  title: "",
  price: "",
  date: "",
};

const ExpenseForm = (props) => {
  const [userinput, setUserInput] = useState(initialData);
  const [formOpen, setFormOpen] = useState(false);

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: Number(event.target.value), // Ensure 'amount' field
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value, // Keeping date in 'YYYY-MM-DD' format
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      ...userinput,
      date: new Date(userinput.date), // Convert to Date object here
    };

    props.onSaveExpenseData(expenseData);

    setUserInput(initialData); // Reset form data after submission
    setFormOpen(false); // Close the form
  };

  return (
    <>
      {formOpen ? (
        <form onSubmit={formSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={userinput.title}
                id="title"
                onChange={titleChangeHandler}
                required
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                value={userinput.amount}
                id="amount"
                onChange={amountChangeHandler}
                required
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                min="2023-01-01"
                max="2024-12-31"
                value={userinput.date}
                onChange={dateChangeHandler}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={() => setFormOpen(false)}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={() => setFormOpen(true)}>
          Add Expense
        </button>
      )}
    </>
  );
};

export default ExpenseForm;
