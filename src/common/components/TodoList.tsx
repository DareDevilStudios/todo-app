// components/TodoList.tsx
import { useState } from 'react';
import { Todo } from '../../types/Todo';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [statusFilter, setStatusFilter] = useState('');

  const filteredTodos = statusFilter
    ? todos.filter((todo) => todo.status === statusFilter)
    : todos;

  return (
    <div>
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <span>{todo.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;