import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function ToDoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span className="todo-item">
        <input
          className="hidden"
          id={`${todo.id}-checkbox`}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label htmlFor={`${todo.id}-checkbox`} className="checkbox-label">
          <FontAwesomeIcon icon={todo.completed ? faCheckCircle : faCircle} />
          <span>{todo.text}</span>
        </label>
      </span>

      <button onClick={() => onDelete(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
