import { Todo } from "../@types/todos.type";

interface TaskList {
  doneTaskList: boolean;
  todos: Todo[];
  handleChecked: (id: string, done: boolean) => void;
  startEdit: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TaskList(props: TaskList) {
  const { doneTaskList, todos, handleChecked, startEdit, deleteTodo } = props;

  return (
    <div>
      <div
        className={`${
          doneTaskList ? "bg-green-800" : "bg-blue-950"
        } border-[1px] border-green-400  rounded-md p-4`}
      >
        <h2 className="text-2xl text-white text-center">
          {doneTaskList ? "Hoàn thành" : "Chưa hoàn thành"}
        </h2>
        {todos.map((todo) => (
          <div
            className="text-xl flex justify-between items-center gap-2"
            key={todo.id}
          >
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={todo.done}
              onChange={(event) => handleChecked(todo.id, event.target.checked)}
            />
            <span
              className={todo.done ? "line-through text-white" : "text-red-400"}
            >
              {todo.name}
            </span>
            <div className="flex gap-2">
              <button
                className="bg-blue-900 rounded-md p-2 text-white hover:bg-amber-600"
                onClick={() => startEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="bg-blue-900 rounded-md p-2 text-white hover:bg-amber-600"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
