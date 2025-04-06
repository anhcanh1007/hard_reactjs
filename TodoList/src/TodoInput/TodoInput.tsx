import { useState } from "react";

interface TodoInputProps {
  addTodos: (name: string) => void;
}

export default function TodoInput(props: TodoInputProps) {
  const { addTodos } = props;
  const [name, setName] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodos(name);
    setName("");
  };
  return (
    <div>
      <div className="flex flex-col justify-center bg-blue-300 p-4 rounded-sm gap-4">
        <h2 className="text-2xl text-green-800 text-center font-bold">
          Add Todo
        </h2>
        <form className="flex justify-between gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="caption goes here"
            className="flex-1 border-[1px] text-xl p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="bg-blue-900 rounded-md p-2 text-white hover:bg-amber-600">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
