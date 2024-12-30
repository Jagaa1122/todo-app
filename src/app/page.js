"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState(["a", "b"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("Are you sure to delete?");
  };

  return (
    <div className="container">
      <div className={styles[`todo-container`]}>
        <h1>To-Do List</h1>
        <div className={styles.flex}>
          <input
            type="text"
            placeholder="Add a new task..."
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className={styles.addButton} onClick={addTodoHandler}>
            Add
          </button>
        </div>
        <div className={styles.flex}>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
        <div>{}</div>
      </div>
    </div>
  );
}
