import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggle, onDelete }) {
  return (
    <>
      <h2>To-Do List</h2>
      <ul className="todo-list">
        {todos.length > 0 &&
          todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        {todos.length === 0 && <p>No tasks to do. Add some !</p>}
      </ul>
    </>
  );
}

export default ToDoList;
