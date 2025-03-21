import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [data, setData] = useState(true);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [checked, setChecked] = useState(null);
  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);
  const [incr, setIncr] = useState(0);
  const [dec, setDec] = useState("");
  const [sub, setSub] = useState({
    name: "",
    email: "",
    type: false,
  });

  return (
    <div className="p-5 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center">
        React State Management Assignment
      </h1>

      {/* Counter Application */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">Counter Application</h3>
        <p>Increment, decrement, and reset the counter.</p>
        <h1 className="text-2xl font-bold">Count: {count}</h1>
        <div className="space-x-2 mt-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Input Field State */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">Input Field State</h3>
        <input
          type="text"
          placeholder="Enter text"
          className="border p-2 w-full mt-2"
          onChange={(e) => setValue(e.target.value)}
        />
        <h3 className="mt-2 font-bold">The enered tex is:{value}</h3>
      </div>

      {/* Toggle Visibility */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">Toggle Visibility</h3>
        {data && <p className="mt-2">This text can be toggled.</p>}
        <div className="space-x-2 mt-3">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setData(true)}
          >
            Show
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setData(false)}
          >
            Hide
          </button>
        </div>
      </div>

      {/* Likes and Dislikes */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">Likes and Dislikes</h3>
        <h2>
          Likes: {likes} | Dislikes: {dislikes}
        </h2>
        <div className="space-x-2 mt-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setLikes(likes + 1)}
          >
            Like
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setDislikes(dislikes + 1)}
          >
            Dislike
          </button>
        </div>
      </div>

      {/* Checkbox for Conditional Rendering */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">Conditional Rendering</h3>
        {checked && <p className="mt-2">Checkbox is checked!</p>}
        <input
          type="checkbox"
          className="mt-2"
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>

      {/* To-Do List */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">To-Do List</h3>
        <input
          type="text"
          className="border p-2 w-full"
          onChange={(e) => setList(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mt-2"
          onClick={() => setTodo((prev) => [list, ...prev])}
        >
          Add Task
        </button>
        <ul className="mt-3 space-y-1">
          {todo.map((item, idx) => (
            <li key={idx} className="border p-2 rounded">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Counter with Step */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">Counter with Step</h3>
        <input
          type="number"
          className="border p-2 w-full"
          onChange={(e) => setDec(e.target.value)}
        />
        <h3 className="mt-2">Value: {incr}</h3>
        <div className="space-x-2 mt-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIncr(incr + Number(dec))}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setIncr(incr - Number(dec))}
          >
            Decrement
          </button>
        </div>
      </div>

      {/* Form Handling */}
      <div className="bg-white p-5 rounded shadow-md">
        <h3 className="text-xl font-semibold">Form Handling</h3>
        <input
          type="text"
          placeholder="Enter name"
          className="border p-2 w-full mt-2"
          onChange={(e) =>
            setSub((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="email"
          placeholder="Enter email"
          className="border p-2 w-full mt-2"
          onChange={(e) =>
            setSub((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
          onClick={() => setSub((prev) => ({ ...prev, type: true }))}
        >
          Submit
        </button>
        {sub.type && (
          <div className="mt-3">
            <p>Name: {sub.name}</p>
            <p>Email: {sub.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hooks;
