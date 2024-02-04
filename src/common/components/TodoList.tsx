import { useState } from "react";
import { Todo } from "../../types/Todo";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [statusFilter, setStatusFilter] = useState("");

  const filteredTodos = statusFilter
    ? todos.filter((todo) => todo.status === statusFilter)
    : todos;

  return (
    <div className="my-12">
      <div className="flex items-center gap-3">
        <h1>Filter By : </h1>
        <select
          className="text-white bg-black border-2 border-white rounded-lg px-4 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {/* <option value="Status">Status</option> */}
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>
      <ul className="my-3 flex flex-col gap-4">
        {filteredTodos.map((todo) => (
          <li className="hover:cursor-pointer group rounded-lg flex justify-between font-bold border-2 border-white text-xl hover:bg-white hover:text-black py-2 px-3" key={todo.id}>
            <h3>{todo.title}</h3>
            {/* <p>{todo.description}</p> */}
            <button className="rounded-lg border-2 px-3 group-hover:border-black">{todo.status}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
