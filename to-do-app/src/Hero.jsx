import { useState } from "react";
import "./hero.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <section>
        <h1>Tasks for today</h1>
        <ul id="container">
          {tasks.map((task, index) => (
            <li key={index} onClick={() => removeTask(index)}>
              {task}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <input
          type="text"
          id="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button type="button" onClick={add} style={{ margin: "10px" }}>
          Add task
        </button>
      </section>
    </>
  );
};

export default Todo;
