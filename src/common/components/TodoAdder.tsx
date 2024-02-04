import { useState } from "react";
import { Todo } from "../../types/Todo";
import { Dispatch, SetStateAction } from "react";

interface TodoAdderProps {
  addTodo: Dispatch<SetStateAction<Todo[]>>;
}

const TodoAdder: React.FC<TodoAdderProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      status,
    };
    addTodo((prevTodos) => [...prevTodos, newTodo]);
    // Clear the input fields after adding the todo
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <div className="flex flex-col gap-5 mt-12">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border-2 border-white bg-black text-white px-4 py-2 rounded-lg"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border-2 border-white bg-black text-white px-4 py-2 rounded-lg"
      ></textarea>
      <select
        className="border-2 border-white bg-black text-white px-4 py-2 rounded-lg"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="To Do">To Do ( set your status ) </option>
        <option value="In Progress">In Progress</option>
      </select>
      <button
        className="border-2 border-white bg-black text-white py-2 px-4 hover:text-black hover:bg-white hover:text-xl duration-300 font-bold rounded-lg"
        onClick={handleAddTodo}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoAdder;