"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([""]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActivefilter] = useState("all");

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
        <div className={styles.newTaskinput}>
          <input
            type="text"
            placeholder="Add a new task..."
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className={styles.addButton} onClick={addTodoHandler}>
            Add
          </button>
        </div>
        <div className={styles.categories}>
          <button
            className={activeFilter == "all" && styles.selected}
            onClick={() => setActivefilter("all")}
          >
            All
          </button>
          <button
            className={activeFilter == "active" && styles.selected}
            onClick={() => setActivefilter("active")}
          >
            Active
          </button>
          <button
            className={activeFilter == "completed" && styles.selected}
            onClick={() => setActivefilter("completed")}
          >
            Completed
          </button>
        </div>
        <div>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </div>
        <div className={styles.tasks}>
          <p className={styles.noTask}>No tasks yet. Add one above!</p>
        </div>
        <p className={styles.copyright}>
          Powered by <span>Pinecone academy</span>
        </p>
      </div>
    </div>
  );
}
