// pages/index.tsx
import { Todo } from '../../../types/Todo';
import TodoAdder from '../../components/TodoAdder';
import TodoList from '../../components/TodoList';

const todos: Todo[] = []; // Initial empty task list

const Homepage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Task Management Application</h1>
      <TodoAdder />
      <TodoList todos={todos} />
    </div>
  );
};

export default Homepage;