import { Todo } from "../@types/todo.type";

interface TodoTaskProps {
  doneTask: boolean;
  todos: Todo[];
  checkDone: (id: string, done: boolean) => void;
  startEdit: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoTask(props: TodoTaskProps) {
  const { doneTask, todos, checkDone, startEdit, deleteTodo } = props;
  return (
    <div>
      <div className="flex flex-col gap-4 bg-amber-100 p-2 rounded-sm">
        <h2 className="text-center text-2xl font-bold">
          {doneTask ? "Hoàn thành" : "Chưa hoàn thành"}
        </h2>
        {todos.map((todo) => (
          <div
            className="flex justify-between items-center text-xl gap-2"
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(e) => checkDone(todo.id, e.target.checked)}
            />
            <span>{todo.name}</span>
            <div className="flex gap-2">
              <button
                className="bg-pink-300 p-2 rounded-sm hover:bg-sky-400"
                onClick={() => startEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="bg-pink-300 p-2 rounded-sm hover:bg-sky-400"
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
