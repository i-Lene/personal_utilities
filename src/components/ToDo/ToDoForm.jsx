import { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import "./ToDo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addClassToBody } from "../../utils/utils_funcs";

export default function ToDoForm() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a ToDo App", completed: true },
    { id: 3, text: "Deploy the App", completed: false },
  ]);

  useEffect(() => {
    const cleanup = addClassToBody("todo_page");
    return () => {
      cleanup && cleanup();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: text.trim(), completed: false },
      ]);
      setText("");
    }
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Hello ! Please enter your tasks here:</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          name="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      {todos.length > 0 && (
        <ToDoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}
