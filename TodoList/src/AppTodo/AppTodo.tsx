import { useState } from "react";
import TaskList from "../TaskList";
import TodoInput from "../TodoInput";
import { Todo } from "../@types/todos.type";

export default function AppTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const doneTask = todos.filter((todo) => todo.done);
  const notDoneTask = todos.filter((todo) => !todo.done);
  const addTodos = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, todo]); //trả về mảng vì đang muốn thêm một phần tử mới vào mảng cũ
  };

  const handleChecked = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        //trả về object vì chỉ cần cập nhật một thuộc tính trong object
        if (todo.id === id) {
          return { ...todo, done };
        }
        return todo;
      });
    });
  };

  console.log(todos);
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen border bg-amber-200 min-w-[300px]">
        <div className="border-[1px] border-amber-600 rounded-md p-4">
          <TodoInput addTodos={addTodos} />
          <TaskList
            doneTaskList={false}
            todos={notDoneTask}
            handleChecked={handleChecked}
          />
          <TaskList
            doneTaskList
            todos={doneTask}
            handleChecked={handleChecked}
          />
        </div>
      </div>
    </div>
  );
}
