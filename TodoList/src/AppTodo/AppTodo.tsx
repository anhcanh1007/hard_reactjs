import { useEffect, useState } from "react";
import TodoInput from "../TodoInput";
import TodoTask from "../TodoTask";
import { Todo } from "../@types/todo.type";

type HandleNewTodos = (todos: Todo[]) => Todo[];
const syncReactToLocal = (handleNewTodos: HandleNewTodos) => {
  const todosString = localStorage.getItem("todos");
  const todosObj: Todo[] = JSON.parse(todosString || "[]");
  const newTodosObj = handleNewTodos(todosObj);
  localStorage.setItem("todos", JSON.stringify(newTodosObj));
};

export default function AppTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [current, setCurrent] = useState<Todo | null>(null);
  const doneTaskList = todos.filter((todo) => todo.done);
  const notDoneTaskList = todos.filter((todo) => !todo.done);

  useEffect(() => {
    const todosString = localStorage.getItem("todos");
    const todosObj: Todo[] = JSON.parse(todosString || "[]");
    setTodos(todosObj);
  }, []);
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, todo]);
    syncReactToLocal((todosObj: Todo[]) => [...todosObj, todo]);
  };
  const checkDone = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }
        return todo;
      });
    });
  };
  const startEdit = (id: string) => {
    const findTodo = todos.find((todo) => todo.id === id);
    if (findTodo) {
      setCurrent(findTodo);
    }
  };
  const editting = (name: string) => {
    setCurrent((prev) => {
      if (prev) {
        return { ...prev, name };
      }
      return null;
    });
  };
  const finishEdit = () => {
    const handle = (todoObj: Todo[]) => {
      return todoObj.map((todo) => {
        if (todo.id === (current as Todo).id) {
          return current as Todo; //ép kiểu dữ liệu
        }
        return todo;
      });
    };
    setTodos(handle);
    setCurrent(null);
    syncReactToLocal(handle);
  };
  const deleteTodo = (id: string) => {
    if (current) {
      setCurrent(null);
    }
    const handle = (todoObj: Todo[]) => {
      const itemdelete = todoObj.findIndex((todo) => todo.id === id);
      if (itemdelete > -1) {
        const result = [...todoObj];
        result.splice(itemdelete, 1);
        return result;
      }
      return todoObj;
    };
    setTodos(handle);
    syncReactToLocal(handle);
  };
  console.log(todos);
  return (
    <div>
      <div className="bg-amber-100 flex justify-center items-center h-screen w-screen">
        <div className="bg-gray-400 p-4 max-w-[600px] rounded-2xl flex flex-col gap-6">
          <TodoInput
            addTodo={addTodo}
            editting={editting}
            current={current}
            finishEdit={finishEdit}
          />
          <TodoTask
            doneTask={false}
            todos={notDoneTaskList}
            checkDone={checkDone}
            startEdit={startEdit}
            deleteTodo={deleteTodo}
          />
          <TodoTask
            doneTask
            todos={doneTaskList}
            checkDone={checkDone}
            startEdit={startEdit}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}
