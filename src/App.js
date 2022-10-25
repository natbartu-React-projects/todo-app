import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/container/Container";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputValue,
        id: uuidv4,
      },
    ]);
  };

  return (
    <div className="App">
      <Container>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </Container>
    </div>
  );
};

export default App;
