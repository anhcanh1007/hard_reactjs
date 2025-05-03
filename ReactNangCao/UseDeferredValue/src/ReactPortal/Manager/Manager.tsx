import React, { useState } from "react";
import Confirm from "../Confirm";

const initalObj = [
  {
    id: 1,
    name: "anh canh",
  },
  {
    id: 2,
    name: "anh canh dang hoc",
  },
];
export default function Manager() {
  const [students, setStudent] = useState(initalObj);
  const [visiable, setVisiable] = useState<boolean>(false);
  return (
    <div className="bg-white p-8">
      <table className="min-w-full">
        <tr className="bg-green-800 text-white">
          <td>#</td>
          <td>Name</td>
          <td>Action</td>
        </tr>
        {students.map((student) => (
          <tr className="bg-blue-300" key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>
              <button
                onClick={() => setVisiable((prev) => !prev)}
                className="bg-gray-500 p-2 rounded-3xl"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <Confirm visiable={visiable} />
    </div>
  );
}
