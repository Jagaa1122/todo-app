"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActivefilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "active") return !todo.isCompleted;
    if (activeFilter === "completed") return todo.isCompleted;
    return true;
  });

  const addTodoHandler = () => {
    if (!newTodo) {
      alert("Please enter a task!");
      return;
    }
    setTodos([
      ...todos,
      {
        id: Date.now(),
        task: newTodo,
        isCompleted: false,
      },
    ]);

    setNewTodo("");
  };

  const deleteHandler = (id) => {
    const deleteSure = window.confirm("Are you sure to delete?");
    if (!deleteSure) return;

    const sureDelete = setTodos(todos.filter((todo) => todo.id !== id));
    return sureDelete;
    // alert("Are you sure to delete?");
  };

  const toggleIsCompleted = (id) => {
    let changedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(changedTodos);
  };

  const clearCompletedHandler = () => {
    const confirmClear = window.confirm(
      "Are you sure want to clear all this shit?"
    );
    if (!confirmClear) return;
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  // const toggleIsCompleted = (incomingTodo) => {
  //   let changedTodos = todos.map((t) => {
  //     if (t.todo === incomingTodo.todo) {
  //       t.isCompleted = !t.isCompleted;
  //     }
  //     return t;
  //   });
  //   setTodos(changedTodos);
  // };

  return (
    <div className="container">
      <div className={styles[`todo-container`]}>
        <h1>To-Do List</h1>
        <div className={styles.newTaskinput}>
          <input
            value={newTodo}
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
            className={activeFilter == "all" ? styles.selected : styles.button}
            onClick={() => setActivefilter("all")}
          >
            All
          </button>
          <button
            className={
              activeFilter == "active" ? styles.selected : styles.button
            }
            onClick={() => setActivefilter("active")}
          >
            Active
          </button>
          <button
            className={
              activeFilter == "completed" ? styles.selected : styles.button
            }
            onClick={() => setActivefilter("completed")}
          >
            Completed
          </button>
        </div>
        <div>
          {filteredTodos.map((todo, index) => {
            return (
              <div className={styles.checkBox} key={index}>
                <input
                  type="checkbox"
                  onChange={() => toggleIsCompleted(todo.id)}
                  checked={todo.isCompleted}
                />

                <p
                  className={todo.isCompleted ? styles.completed : styles.taskP}
                >
                  {todo.task}
                </p>

                <button
                  onClick={() => deleteHandler(todo.id)}
                  className={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.tasks}>
          {todos.length == 0 ? (
            <p className={styles.noTask}>No tasks yet. Add one above!</p>
          ) : (
            <div className={styles.taskSummary}>
              <p>
                {todos.filter((todo) => todo.isCompleted).length} of{" "}
                {todos.length} tasks completed
              </p>
              <p
                onClick={clearCompletedHandler}
                className={styles.clearCompletedBtn}
              >
                Clear completed
              </p>
            </div>
          )}
        </div>
        <p className={styles.copyright}>
          Powered by <span>Pinecone academy</span>
        </p>
      </div>
    </div>
  );
}
