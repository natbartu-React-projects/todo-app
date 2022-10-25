import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./form.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: inputValue,
        id: uuidv4,
      },
    ]);

    setInputValue("");
  };

  return (
    <div>
      {" "}
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <p>{todo.text}</p>
          <i className="far fa-trash-alt"></i>
        </div>
      ))}
    </div>
  );
};

export default Form;
