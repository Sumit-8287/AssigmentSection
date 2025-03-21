import React, { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [values, setValues] = useState(true);
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [check, setCheck] = useState(null);
  const [controllValue, setControllValue] = useState(0);
  const [counts, setcounts] = useState("");
  const [color, setColor] = useState("white");
  const [switchs, setSwitchs] = useState("white");
  const bgColor = [
    "white",
    "red",
    "black",
    "blue",
    "orange",
    "purple",
    "gray",
    "brown",
    "yellow",
  ];
  const [list, setList] = useState([]);
  const [listValue, setListValue] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    type: false,
  });

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">
          React State Management Assignment
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            1. Counter Application
          </h2>
          <h4 className="text-lg mb-4">
            Create a counter that:
            <ul className="list-disc list-inside">
              <li>Increments the value by 1 on a button click.</li>
              <li>Decrements the value by 1 on another button click.</li>
              <li>Resets the value to 0.</li>
            </ul>
          </h4>
          <div className="space-y-2">
            <h1 className="text-xl">Value is {count}</h1>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setCount(count + 1)}
            >
              Increase by +1
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setCount(count - 1)}
            >
              Decrease by -1
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Input Field State</h2>
          <h4 className="text-lg mb-4">
            Create a component where:
            <ul className="list-disc list-inside">
              <li>There is an input field for entering text.</li>
              <li>
                Display the entered text in real-time below the input field.
              </li>
            </ul>
          </h4>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter something"
              className="border p-2 rounded w-full"
              onChange={(e) => setValue(e.target.value)}
            />
            <h3 className="text-xl">{value}</h3>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Toggle Visibility</h2>
          <h4 className="text-lg mb-4">
            Create a component with:
            <ul className="list-disc list-inside">
              <li>A toggle button to show or hide a paragraph of text.</li>
            </ul>
          </h4>
          <div className="space-y-2">
            {values && (
              <div className="p-4 border rounded">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                nihil eum ad unde eaque aspernatur, adipisci dignissimos et
                autem cum voluptatibus sunt qui magni est dolores mollitia
                nobis. Tempore, tempora?
              </div>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setValues(!values)}
            >
              {values ? "Hide" : "Show"}
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Multiple States</h2>
          <h4 className="text-lg mb-4">
            Create a component with two buttons:
            <ul className="list-disc list-inside">
              <li>One button to increase a "likes" counter.</li>
              <li>Another button to increase a "dislikes" counter.</li>
              <li>Both counters should work independently.</li>
            </ul>
          </h4>
          <div className="space-y-2">
            <h4 className="text-xl">Likes {likes}</h4>
            <h4 className="text-xl">DisLikes {disLikes}</h4>
            <div className="flex gap-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => setLikes(likes + 1)}
              >
                Increase Likes
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setDisLikes(disLikes + 1)}
              >
                Increase DisLikes
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            5. Conditional Rendering
          </h2>
          <h4 className="text-lg mb-4">
            Create a component with:
            <ul className="list-disc list-inside">
              <li>A checkbox.</li>
              <li>
                If the checkbox is checked, display a message (e.g., "Checkbox
                is checked").
              </li>
              <li>If unchecked, hide the message.</li>
            </ul>
          </h4>
          <div className="space-y-2">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setCheck(e.target.checked)}
            />
            {check && <span className="text-xl">Checkbox is checked</span>}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            6. Array State (To-Do List)
          </h2>
          <h4 className="text-lg mb-4">
            Create a to-do list application:
            <ul className="list-disc list-inside">
              <li>Use useState to manage an array of tasks.</li>
              <li>Add a button to add a new task to the array.</li>
              <li>Display all tasks in a list.</li>
            </ul>
          </h4>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter data"
              value={listValue}
              className="border p-2 rounded w-full"
              onChange={(e) => setListValue(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setList((prev) => [listValue, ...prev]);
                setListValue("");
              }}
            >
              Add
            </button>
            <div className="space-y-1">
              {list.map((item, idx) => (
                <div key={idx} className="p-2 border rounded">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            7. Counter with Step Value
          </h2>
          <h4 className="text-lg mb-4">
            Create a counter where:
            <ul className="list-disc list-inside">
              <li>
                The increment or decrement is controlled by an input field.
              </li>
              <li>
                Example: If the step value is 5, clicking the increment button
                increases the count by 5.
              </li>
            </ul>
          </h4>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Add only numbers"
              value={counts}
              className="border p-2 rounded w-full"
              onChange={(e) => setcounts(e.target.value)}
            />
            <p className="text-xl">Value is shown here {controllValue}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setControllValue(controllValue + Number(counts));
                setcounts("");
              }}
            >
              Increment
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setControllValue(controllValue - Number(counts));
                setcounts("");
              }}
            >
              Decrement
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Form Handling</h2>
          <h4 className="text-lg mb-4">
            Create a form with:
            <ul className="list-disc list-inside">
              <li>Two input fields (name and email).</li>
              <li>A submit button.</li>
              <li>
                Display the submitted data below the form after clicking the
                button.
              </li>
            </ul>
          </h4>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter name"
              className="border p-2 rounded w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="email"
              placeholder="Enter email"
              className="border p-2 rounded w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setData((prev) => ({ ...prev, type: true }));
              }}
            >
              Show Above Data
            </button>
            {data.type && (
              <div className="space-y-1">
                <p className="text-xl">{data.name}</p>
                <p className="text-xl">{data.email}</p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            9. Dynamic Background Color
          </h2>
          <h4 className="text-lg mb-4">
            Create a component with:
            <ul className="list-disc list-inside">
              <li>
                A button that changes the background color of a div every time
                it's clicked.
              </li>
              <li>Use an array of colors to cycle through.</li>
            </ul>
          </h4>
          <div className="space-y-2">
            <div
              className="p-4 rounded"
              style={{ backgroundColor: `${color}` }}
            >
              <h1 className="text-xl">I am background Color</h1>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() =>
                setColor(
                  `${bgColor[Math.floor(Math.random() * bgColor.length)]}`
                )
              }
            >
              Change Color
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">10. Toggle Dark Mode</h2>
          <h4 className="text-lg mb-4">
            Create a component with:
            <ul className="list-disc list-inside">
              <li>
                A toggle button for switching between light mode and dark mode.
              </li>
              <li>
                Change the background and text color of the page based on the
                selected mode.
              </li>
            </ul>
          </h4>
          <div className="space-y-2">
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: `${switchs}`,
                color: `${switchs === "white" ? "black" : "white"}`,
              }}
            >
              I am a text of background Color.
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() =>
                setSwitchs((prev) => (prev === "white" ? "black" : "white"))
              }
            >
              Change background with text color
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hooks;
