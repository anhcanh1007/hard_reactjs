import { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { Todo } from "../@types/todo.type";
import { TodoTypes } from "../PropTypes/todo.proptype";
import Title from "../Title";

interface TodoInputProps {
  addTodo: (name: string) => void;
  editting: (name: string) => void;
  current: Todo | null;
  finishEdit: () => void;
}

export default function TodoInput(props: TodoInputProps) {
  const { addTodo, current, editting, finishEdit } = props;
  const [name, setName] = useState<string>("");
  const address = useMemo(() => {
    return { street: "an phu vu quang" };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (current) {
      finishEdit();
      if (name) setName("");
    } else {
      addTodo(name);
      setName("");
    }
  };

  const handleClickTitle = useCallback((value: string) => {
    console.log(value);
  }, []);
  return (
    <div>
      <div className="bg-rose-50 p-2 rounded-sm flex flex-col gap-4">
        <Title address={address} handleClickTitle={handleClickTitle} />
        <h2 className="text-center te xt1-2xl font-bold">Todo Input</h2>
        <form onSubmit={handleSubmit} className="flex gap-2 justify-between">
          <input
            type="text"
            placeholder="caption goes here"
            className="flex-1 border-1 border-red-600 p-2 rounded-sm"
            value={current ? current.name : name}
            onChange={
              current
                ? (e) => editting(e.target.value)
                : (e) => setName(e.target.value)
            }
          />
          <button className="bg-pink-300 p-2 rounded-sm hover:bg-sky-400">
            {current ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editting: PropTypes.func.isRequired,
  current: PropTypes.oneOfType([TodoTypes, PropTypes.oneOf([null])]),
  finishEdit: PropTypes.func.isRequired,
};
