import { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import "./ToDo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addClassToBody } from "../../utils/utils_funcs";

const LOCAL_STORAGE_KEY = "my_todo_list";

export default function ToDoForm() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
      <h1>Hello! Please enter your tasks here:</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          name="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">
          <span className="icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </button>
      </form>
      <ToDoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </>
  );
}
