import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggle, onDelete }) {
  return (
    <>
    <h2>To-Do List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
