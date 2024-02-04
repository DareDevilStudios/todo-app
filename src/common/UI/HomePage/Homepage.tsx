import { Todo } from "../../../types/Todo";
import TodoAdder from "../../components/TodoAdder";
import TodoList from "../../components/TodoList";
import { useState } from "react";

const Homepage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="">
      <div className="w-96">
        <h1 className="text-3xl font-bold text-center">Add your task</h1>
        <TodoAdder addTodo={setTodos} />
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-bold text-center">My Tasks</h1>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Homepage;